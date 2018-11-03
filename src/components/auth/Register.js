import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import axios from 'axios';
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
  }

  componentDidMount() {

  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
  });
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

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
    };
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAbYfzuVGvaR9HzntqjtSXUeTFyn-xph_4', user)
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

    return (
<div className="form-body ">

  
    <form className="form-wrapper register-wrapper form-header" onSubmit={this.handleSubmit}>

        <div className="input-text">
          <input type="text" id="label2" placeholder="E-mail" name="email"
          onChange={this.handleEmailChange}
          value={this.state.email} />
          <label htmlFor="label2">E-mail</label>
        </div>

        <div className="input-text">
          <input type="text" id="label3" placeholder="Password" name="password"
          onChange={this.handlePasswordChange}
          value={this.state.password} />
          <label htmlFor="label3">Password</label>
        </div>

        <div className="input-text">
          <input type="text" id="label5" placeholder="City" name="city"
          onChange={this.handleCityChange}
          value={this.state.city} />
          <label htmlFor="label5">City</label>
        </div>

        <div className="input-text">
          <input type="text" id="label6" placeholder="State" name="state"
          onChange={this.handleStateChange}
          value={this.state.state} />
          <label htmlFor="label6">State</label>
        </div>

    </form>
</div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: userId => dispatch(actions.loginSuccess(userId)),
  };
};
 export default connect(null, mapDispatchToProps)(withErrorHandler(Register, axios));
