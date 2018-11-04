import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import axios from 'axios';

import Input from '../ui/input/Input';
import Button from '../ui/button/Button';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Register extends Component {

  state = {
        username: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zipcode: 0,
        isSignup: true,

        controls: {

          email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email Address'
            },
            value: '',
            validation: {
              required: true,
              isEmail: true,
              minLength: 5,
            },
            valid: false,
            touched: false
          },

          password: {
              elementType: 'input',
              elementConfig: {
                  type: 'password',
                  placeholder: 'Password'
              },
              value: '',
              validation: {
                  required: true,
                  minLength: 6,
                  isPassword: true
              },
              valid: false,
              touched: false
          },

          address: {
            elementType: 'input',
            elementConfig: {
                type: 'address',
                placeholder: 'Address'
            },
            value: '',
            validation: {
              required: true,
              isMail: false,
              minLength: 5,
            },
            valid: false,
            touched: false
          },

          city: {
              elementType: 'input',
              elementConfig: {
                  type: 'city',
                  placeholder: 'City'
              },
              value: '',
              validation: {
                  required: true,
                  minLength: 4,
              },
              valid: false,
              touched: false
          },

          state: {
              elementType: 'select',
              elementConfig: {
                  type: 'state',
                  placeholder: 'State',
                  options: [
                    {value: 'DE', displayValue: 'Delaware'},
                    {value: 'PA', displayValue: 'Pennsylvania'},
                    {value: 'MD', displayValue: 'Maryland'},
                    {value: 'NJ', displayValue: 'New Jersey'},
                    {value: 'NY', displayValue: 'New York'}]
              },
              value: '',
              validation: {
                  required: true,
                  minLength: 6,
              },
              valid: false,
              touched: false,
          },
          zipcode: {
              elementType: 'input',
              elementConfig: {
                  type: 'zipcode',
                  placeholder: 'zipcode'
              },
              value: '',
              validation: {
                  required: true,
                  minLength: 5,
                  isNumeric: true,
              },
              valid: false,
              touched: false
          }

  }// END OF Controls
} // END OF State

  // ============= MAX ============//
  //===============================

  checkValidity(value, rules) {
      let isValid = true;
      if (!rules) {
          return true;
      }

      if (rules.required) {
          isValid = value.trim() !== '' && isValid;
      }

      if (rules.minLength) {
          isValid = value.length >= rules.minLength && isValid
      }

      if (rules.maxLength) {
          isValid = value.length <= rules.maxLength && isValid
      }

      if (rules.isEmail) {
          const pattern = /^(?:(?:\w)+(\.|_)?(?!\.))*\w@(?:(?:[a-z])+(-|\.)?(?!\.))*[a-z]\.[a-z]{3,}$/;
          isValid = pattern.test(value) && isValid
      }

      if (rules.isPassword) {
          const pattern = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9]).{6,30}$/;
          isValid = pattern.test(value) && isValid
      } // Use (one Capital)(one Special Character)(two numbers)(total six to 30 characters allowed)

      if (rules.isNumeric) {
          const pattern = /^\d+$/;
          isValid = pattern.test(value) && isValid
      }

      return isValid;
  }
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
          ...this.state.controls[controlName],
          value: event.target.value,
          valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
          touched: true,
      }
    };
    this.setState({controls: updatedControls});

  }

  //======== END OF MAX =========//
  //==============================
  componentDidMount() {

  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
    console.log("Register - state: ", this.state.email)
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  }

  handleAddressChange = event => {
    this.setState({
      address: event.target.value,
    });
  }

  handleCityChange = event => {
      this.setState({
        city: event.target.value,
      });
  }

  handleStateChange = event => {
    this.setState({
      state: event.target.value,
    });
  }

  handleZipcodeChange = event => {
    this.setState({
      zipcode: event.target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value,
      address: this.state.controls.address.value,
      city: this.state.controls.city.value,
      state: this.state.controls.state.value,
    };
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAa3ZDLm6gTLU-VXogMORK4J90wzYf8nXo', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.onLoginSuccess(res.data.localId);
        console.log("LocalID set to UserID: ", res.data.localId);
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  render() {

    const formElementsArray = [];
    for( let key in this.state.controls) {
        formElementsArray.push({
          id: key,
          config: this.state.controls[key]
        });
    }

    const form = formElementsArray.map(formElement => (
      <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      touched={formElement.config.touched}
      shouldValidate={formElement.config.validation}
      changed={event => this.inputChangedHandler(event, formElement.id)} />
    ));
    return (
    <div>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button color="gray" btnType="Success material-button sm-btn">{this.state.isSignup ? 'SIGNUP' : 'SIGNIN'}</Button>
        </form>
    </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: userId => dispatch(actions.loginSuccess(userId)),
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
  };
};
 export default connect(null, mapDispatchToProps)(withErrorHandler(Register, axios));
