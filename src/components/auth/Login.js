import React, { Component } from 'react';

import { NavLink, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';
import * as actions from '../../store/actions/index';

class Login extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    loggedin: false,
    userId: '',
  }

  componentDidMount() {
     $(".input-button button").click(function(event) {

     $(".form-wrapper").addClass("send");
   });
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
  });
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

  extractUsername = email => {
    let username = [];

    for( let i = 0; i < email.length; i++) {
    	  if(email[i] != '@') {
        		username.push(email[i]);
        }
        	else {
          	break;
          }
    }
     console.log( "Extracted Username: ", this.state.username);
     return username;

  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {

      email: this.state.email,
      password: this.state.password,
      username: this.extractUsername(this.state.email),
      returnSecureToken: true,
    };
          console.log( "User Name is: " + user.username);
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAbYfzuVGvaR9HzntqjtSXUeTFyn-xph_4', user)
      .then(res => {
        console.log("SuccessStatus is: ", res.data );
        localStorage.setItem('token', res.data.refreshToken);
        this.props.onLoginSuccess(res.data.localId, user.username);
        console.log("Local Id to User Id: ", res.data.localId);
        let token = localStorage.getItem('token');
        console.log("Refresh Token From Firebase is :", token);
        token ? (this.props.onLogin()) : null;
        this.props.history.push(this.props.authRedirectPath);
          if(token) {
              $(".input-button button").click(function(event) {

                  $(".form-wrapper").addClass("send");
              });
          }
      }).catch(error => {
    console.log(error.response);
});
  }

  render() {

    return (
    <div className="form-body ">
    
        <div className="col-sm-5 form-side-header">
            <h3 style={{color: 'white'}}>Login to start purchasing your favorite films!</h3>
            <h4>
              Not registered, <NavLink to="/register"><strong>Sign Up</strong> with us.. </NavLink>
            </h4>
            <h4>
                ..Or head<NavLink to="/"><strong> back</strong> <i className="fas fa-arrow-left"></i> </NavLink>
            </h4>
        </div>
        <form className="form-wrapper login-wrapper col-sm-5 form-header" onSubmit={this.handleSubmit}>
            <h2 className="form-title ">Login to <span className="kcflix">KC-FLIX</span></h2>

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

            <div className="input-button">
              <button type="submit"><i className="fa fa-paper-plane"></i></button>
            </div>

        </form>

    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isAuthenticated: state.auth.isAuthenticated, // === GLOBAL STATE from the store prop = { store },
    userId: state.auth.userId,
    authRedirectPath: state.auth.authRedirectPath,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: (userId, username) => dispatch(actions.loginSuccess(userId, username)),
    onLogin: () => dispatch(actions.login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
