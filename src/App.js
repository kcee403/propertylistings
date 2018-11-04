import * as React from 'react';

import image from './images/location-map.svg';
import data from './components/data/Data';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Modal from './components/ui/modal/Modal';
import GoogleMap from './components/googlemap/GoogleMap';
import PropertySummary from './components/propertysummary/PropertySummary';
import Register from './components/auth/Register';

import jump from 'jump.js';
import {easeInOutCubic} from './utils/Easing';

import ReactDependentScript from 'react-dependent-script';

import * as actions from './store/actions';
import {connect} from 'react-redux';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[0],
      // filterIsVisible: false,
      filterBedrooms: 'any',
      filterBathrooms: 'any',
      filterCars: 'any',
      filterSort: 'any',
      priceFrom: 500000,
      priceTo: 1000000,
      filteredProperties: [],
      isFiltering: false,
      modalShow: this.props.isViewingSummary !== false && this.props.isAttemptingLogin !== false,
    }
    this.setActiveProperty = this.setActiveProperty.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterProperties = this.filterProperties.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
//     axios.get('http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1gqfmq0y1or_5jgqp&state=wa&city=seattle&childtype=neighborhood',)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(error => {
//     console.log(error.response)
// });
  }

  setActiveProperty(property, scroll) {
      const {index} = property;
      const target = `#card-${index}`;

      this.setState({
          activeProperty: property
      });
      console.log("'App' Set Active Property Index: ", index );
      if(scroll) {
        // scroll to the right property
        jump( target, {
              duration: 800,
              easing: easeInOutCubic,
        })
      }
  }

  handleFilterChange(e){

    const target = e.target;
    const {value, name} = target;
    console.log("handleFilterChange, value and name: ", value, name);
    this.setState({
      [name]: value
    }, function() {
       this.filterProperties();
    })
}

  filterProperties(){
      const {properties, filterBedrooms, filterBathrooms, filterCars, filterSort, priceTo,
      priceFrom} = this.state;
      const isFiltering = filterBedrooms !== 'any' ||
                          filterBathrooms !== 'any' ||
                          filterCars !== 'any' ||
                          filterSort !== 'any' ||
                          priceFrom !== '0' ||
                          priceTo !== '1000001';

      const getFilteredProperties = properties => {
          const filteredProperties = [];

          properties.map(property => {

              const {bedrooms, bathrooms, carSpaces, price} = property;

              const match =
                  (bedrooms === parseInt(filterBedrooms, 0) || filterBedrooms === 'any') &&
                  (bathrooms === parseInt(filterBathrooms, 0) || filterBathrooms === 'any') &&
                  (carSpaces === parseInt(filterCars, 0) || filterCars === 'any') &&
                  (price >= priceFrom && price <= priceTo);
              // if the match is true push this property to filteredProperties
              return match && filteredProperties.push(property);
          })



          switch(filterSort) {
              case '0':
                filteredProperties.sort((a,b) => a.price - b.price)
                break;
              case '1':
                filteredProperties.sort((a,b) => b.price - a.price)
                break;
                default:
                 "Switch Filter Sort";
            }
          return filteredProperties;
      }

      this.setState({
          filteredProperties: getFilteredProperties(properties),
          activeProperty: getFilteredProperties(properties)[0] || properties[0],
          isFiltering
      })
  } // FilteredProperties END

  clearFilter(e, form){
    e.preventDefault();

    this.setState({
        filterBedrooms: 'any',
        filterBathrooms: 'any',
        filterCars: 'any',
        filterSort: 'any',
        priceFrom: 500000,
        priceTo: 1000000,
        filteredProperties: [],
        isFiltering: false,
        activeProperty: this.state.properties[0]
    })

    form.reset();
  }

  render() {
    const {properties, activeProperty, filterIsVisible, filteredProperties, isFiltering, filterSort} = this.state;
    const propertiesList = isFiltering ? filteredProperties : properties;

    // now sort the propertiesList
      const MAP_KEY = "AIzaSyAtFz6R7OtnNq7L0hemsIpvTJQEG8ZNk_E";
      // let propertySummary = null;
      // if(this.props.isViewingSummary === true) {
      //   propertySummary = <PropertySummary propertySummary={this.props.propertySummary} />
      //   console.log("isViewSummary state in 'App': ", this.props.isViewingSummary);
      // }

      let propertySummary = null;
      let login = "";

      if(this.props.isAttemptingLogin) {
        propertySummary = null;
        login = <Register />;
      }
       else {
         propertySummary = <PropertySummary propertySummary={this.props.propertySummary} />;
       }

    return (
      <div>
        {/* listings - Start */}
        <div className="listings">
          <Header
           clearFilter={this.clearFilter}
           handleFilterChange={this.handleFilterChange} />

          <div className="cards container">
            <div className={`cards-list row ${propertiesList.length === 0 ?  'is-empty' : ''}`}>

              {
                propertiesList.map(property => {
                   return <Card
                              key={property._id}
                              property={property}
                              activeProperty={activeProperty}
                              setActiveProperty={this.setActiveProperty}
                                />
                })
              }
              {
                (isFiltering && filteredProperties.length === 0) && <p className="warning">
                  <img src={image} /> <br /> No properties were found</p>
              }

            </div>
          </div>
        </div>

          <ReactDependentScript scripts={[`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`]}>

              <GoogleMap
                properties={properties}
                activeProperty={activeProperty}
                setActiveProperty={this.setActiveProperty}
                filteredProperties={filteredProperties}
                isFiltering={isFiltering} />

          </ReactDependentScript>

          <Modal show={this.props.isViewingSummary}>
            {propertySummary}
          </Modal>
          <Modal show={this.props.isAttemptingLogin}>
              {login}
          </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    isViewingSummary: state.crd.isViewingSummary,
    propertySummary: state.crd.property,
    isAttemptingLogin: state.auth.isAttemptingLogin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchProperties: () => dispatch(actions.fetchProperties),
    onAttemptLogin: () => dispatch(actions.attemptLogin),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
