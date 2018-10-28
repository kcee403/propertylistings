import React, { Component } from 'react';
import { Fragment } from 'react';

import { propertyImgs, interiorImgs } from '../../images/index';
import {Carousel, Well} from 'react-bootstrap';

import {connect} from 'react-redux';

class PropertySummary extends Component {

  render() {
    const {price, address, city, picture, bedrooms, bathrooms, carSpaces, index} = this.props.propertySummary;

    return (
      <div className="">
        <Carousel interval={null} indicators={false}>
            <Carousel.Item>
                <img alt="c" src={propertyImgs[index]} />
                <Carousel.Caption style={{fontSize: "2rem"}}>
                <p className="">
                    {city}<br />{address}
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="1300x900 property image" src={interiorImgs[index]} />
                <Carousel.Caption style={{fontSize: "2rem"}}>

                Beautiful home on in the greater Philadelphia area. Call for more info.
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="summary-body">
                <p className="">Price: {price}</p>
                <ul>
                    <li className="">Bedrooms: {bedrooms}</li>
                    <li className="">Bathrooms: {bathrooms}</li>
                    <li className="">Car Spaces: {carSpaces}</li>
                </ul>
                <p>Contact us (555) 525 5225 for more info</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    propertySummary: state.crd.property,
  }
}

export default connect(mapStateToProps)(PropertySummary);
