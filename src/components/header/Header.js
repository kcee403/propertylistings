import React from 'react';
import image from '../../images/icons/logo/center-city-logo.jpg';
import PropTypes from 'prop-types';
import Filter from './filter/Filter';

import * as actions from '../../store/actions/index'
import {connect} from 'react-redux';

const onToggleFilter = event => {
  event.preventDefault();

  return {

  }
}

const Header = props =>
    <header className={`${props.filterIsVisible ? 'filter-is-visible': ''}`}>
        <button className="btn-login pull-right" onClick={() => {props.onAttemptLogin()}}>Sign Up</button>
        <Filter handleFilterChange={props.handleFilterChange}
                clearFilter={props.clearFilter}
        />

        <img src={image} />
        <h1>Center City Listings</h1>
        <button className="btn-filter material-button dark-btn" data-color="gray" onClick={(event) => {event.preventDefault(); props.toggleFilter()}}>Filter</button>
    </header>;

  Header.propTypes = {
     filterIsVisible: PropTypes.bool.isRequired,
     toggleFilter: PropTypes.func.isRequired,
     clearFilter: PropTypes.func.isRequired,
     handleFilterChange: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
        filterIsVisible: state.filter.filterIsVisible
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
            toggleFilter: () => dispatch(actions.toggleFilter()),
            onAttemptLogin: () => dispatch(actions.attemptLogin()),
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Header);
