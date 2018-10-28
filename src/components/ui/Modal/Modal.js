import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
// import { withRouter } from 'react-router';

import * as actions from '../../../store/actions';
import {connect} from 'react-redux';

import PropertySummary from '../../propertysummary/PropertySummary';

class Modal extends Component {
  shouldComponentUpdate ( nextProps, nextState ) {
      return nextProps.show !== this.props.show || nextProps !== this.props.children;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.onCloseModal} />
          <div className="modals propertySummary"
            style={{
              transform: this.props.show ? 'translateY(0)' : 'translateY(1400px)',
              opacity: this.props.show ? '1' : '0',
            }}>
            <div onClick={() => {this.props.onCloseModal()}} className="close"><i className="fas fa-times"></i></div>
            {this.props.children}
            {/* <button onClick={() => { this.props.history.push('/shopping-cart') } } className="pull-right material-button" data-color="orange">
                GO TO {" "}
                <i className="fas fa-shopping-cart"></i>
            </button> */}
            <PropertySummary />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    isViewingSummary: state.crd.isViewingSummary,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch(actions.closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
