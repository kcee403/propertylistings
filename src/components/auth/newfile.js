import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../includes/Navbar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import $ from 'jquery';
import registerServiceWorker from '../../registerServiceWorker';
import axios from 'axios';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    };
          console.log(user.name);
    axios.post('/api/users', this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
    console.log(error.response)
});
  }

  render() {

    return (
<div className="form-body ">

    <div className="col-md-3 form-side-header">
        <h2 style={{color: 'white'}}>Sign Up to start watching your favorite films!</h2>
        <h4>
          <a href="/">..Or head back <i className="fas fa-arrow-left"></i></a></h4>
    </div>
    <form className="form-wrapper col-md-4 form-header" onSubmit={this.handleSubmit}>
        <h2 className="form-title ">Signup with <span className="kcflix">KC-FLIX</span></h2>

        <div className="success">
          <i className="fa fa-check fa-3x"></i>
          <h1>Thank you for subscribing</h1>
        </div>

        <div className="input-text">
          <input type="text" id="label1" placeholder="Name" name="name"
            onChange={this.handleNameChange}
            value={this.state.name} />
          <label htmlFor="label1">Name</label>
        </div>

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
          <input type="text" id="label4" placeholder="Address" name="address"
          onChange={this.handleAddressChange}
          value={this.state.address} />
          <label htmlFor="label4">Address</label>
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

        <div className="input-text">
          <input type="text" id="label7" placeholder="Zipcode" name="zipcode"
          onChange={this.handleZipcodeChange}
          value={this.state.zipcode==0 ? '' : this.state.zipcode} />
          <label htmlFor="label7">Zipcode</label>
        </div>

        <div className="input-button">
          <button type="submit"><i className="fa fa-paper-plane"></i></button>
        </div>

    </form>
</div>
    );
  }
} export default Register;
















import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../includes/Navbar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import $ from 'jquery';
import registerServiceWorker from '../../registerServiceWorker';
import axios from 'axios';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    };
          console.log(user.name);
    axios.post('/api/users/register', this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
    console.log(error.response)
});
  }

  render() {

    return (
<div className="form-body ">

    <div className="col-md-3 form-side-header">
        <h2 style={{color: 'white'}}>Sign Up to start watching your favorite films!</h2>
        <h4>
          <a href="/">..Or head back <i className="fas fa-arrow-left"></i></a></h4>
    </div>
    <form className="form-wrapper col-md-4 form-header" onSubmit={this.handleSubmit}>
        <h2 className="form-title ">Signup with <span className="kcflix">KC-FLIX</span></h2>

        <div className="success">
          <i className="fa fa-check fa-3x"></i>
          <h1>Thank you for subscribing</h1>
        </div>

        <div className="input-text">
          <input type="text" id="label1" placeholder="Name" name="name"
            onChange={this.handleNameChange}
            value={this.state.name} />
          <label htmlFor="label1">Name</label>
        </div>

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
          <input type="text" id="label4" placeholder="Address" name="address"
          onChange={this.handleAddressChange}
          value={this.state.address} />
          <label htmlFor="label4">Address</label>
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

        <div className="input-text">
          <input type="text" id="label7" placeholder="Zipcode" name="zipcode"
          onChange={this.handleZipcodeChange}
          value={this.state.zipcode==0 ? '' : this.state.zipcode} />
          <label htmlFor="label7">Zipcode</label>
        </div>

        <div className="input-button">
          <button type="submit"><i className="fa fa-paper-plane"></i></button>
        </div>

    </form>
</div>
    );
  }
} export default Register;
















const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login'}} />
    )
  )} />
)
