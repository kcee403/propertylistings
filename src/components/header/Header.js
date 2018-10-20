import React from 'react';
import image from '../../images/house-location-pin.svg'
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

  <Filter handleFilterChange={props.handleFilterChange}
          clearFilter={props.clearFilter}
  />

  <img src={image} />
  <h1>Property Listings</h1>
  <button className="btn-filter material-button" onClick={(event) => {event.preventDefault(); props.toggleFilter()}} data-color="gray">Filter</button>
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
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Header);
