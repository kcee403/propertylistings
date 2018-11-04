import React, { Component } from 'react';
import { Fragment } from 'react';

import { propertyImgs, interiorImgs } from '../../images/index';
import {Carousel, Well, Grid, Row, Col} from 'react-bootstrap';


class PropertySummary extends Component {

  getFontColor(status) {
    switch (status) {
        case 'Rent':
            return "blue";
            break;
        case 'Sale':
            return "#3CB371";
            break;
        case 'Sold':
            return "red";
            break;
    }
  }
  render() {
    const {price, address, city, picture, bedrooms, bathrooms, carSpaces, index, status, type, daysposted, yearbuilt} = this.props.propertySummary;
    let statusColor = '';
    //
    // if(statusColor === 'Rent') {
    //   return 'blue';
    // }
    //   elseif(statusColor ==='Sale') {
    //     return 'purple';
    //   }
    //     else {
    //       return 'red';
    //     }
      statusColor = this.getFontColor(status);

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
                <p className="pull-right" style={{color: statusColor}}>
                 {statusColor !== 'red' ? 'For' : ''}
                 {" " + status}</p>
                <p className="">Price: {"$" + price}</p>
                <p className="">Estimated Mortgage: {"$" + (price*0.004157333).toFixed(2)}</p>

                <ul>
               {/*  <li className="">Bedrooms: {bedrooms} <i className="fas fa-bed"></i> </li>
                    <li className="">Bathrooms: {bathrooms} <i className="fas fa-bath"></i> </li>
                    <li className="">Car Spaces: {carSpaces} <i className="fas fa-car"></i> </li>
                    <li className="">Type: {type} <i className="fas fa-home"></i> </li>
                    <li className="">Days Posted: {daysposted} <i className="fas fa-calendar-alt"></i> </li>
                    <li className="">Year Built: {yearbuilt} <i className="far fa-building"></i> </li> */}
                    <Grid>
                      <Row className="show-grid">
                          <Col xs={4} md={2}>
                              <li className="">Bedrooms: {bedrooms} <i className="fas fa-bed"></i> </li>
                          </Col>
                          <Col xs={4} md={2}>
                            <li className="">Bathrooms: {bathrooms} <i className="fas fa-bath"></i> </li>
                          </Col>
                      </Row>

                      <Row className="show-grid">
                          <Col xs={4} md={2}>
                            <li className="">Car Spaces: {carSpaces} <i className="fas fa-car"></i> </li>
                          </Col>
                          <Col xs={4} md={2}>
                            <li className="">Type: {type} <i className="fas fa-home"></i> </li>
                          </Col>
                      </Row>

                      <Row className="show-grid">
                          <Col xs={4} md={2}>
                            <li className="">Days Posted: {daysposted} <i className="fas fa-calendar-alt"></i> </li>
                          </Col>
                          <Col xs={4} md={2}>
                            <li className="">Year Built: {yearbuilt} <i className="far fa-building"></i> </li>
                          </Col>
                      </Row>
                    </Grid>
                </ul>
                <p>Contact us (555) 525 5225 for more info</p>

        </div>
      </div>
    );
  }
}


export default PropertySummary;
