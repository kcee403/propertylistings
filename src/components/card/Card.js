import * as React from 'react';
import PropTypes from 'prop-types';
import {priceFormat} from '../../utils/Formatters';

import Pic1 from '../../images/properties/maps1.jpg';
import Pic2 from '../../images/properties/maps2.jpg';
import Pic3 from '../../images/properties/maps3.jpg';
import Pic4 from '../../images/properties/maps4.jpg';
import Pic5 from '../../images/properties/maps5.jpg';
import Pic6 from '../../images/properties/maps6.jpg';
import Pic7 from '../../images/properties/maps7.jpg';
import Pic8 from '../../images/properties/maps8.jpg';
import Pic9 from '../../images/properties/maps9.jpg';
import Pic10 from '../../images/properties/maps10.jpg';
import Pic11 from '../../images/properties/maps11.jpg';
import Pic12 from '../../images/properties/maps12.jpg';
import Pic13 from '../../images/properties/maps13.jpg';
import Pic14 from '../../images/properties/maps14.jpg';
import Pic15 from '../../images/properties/maps15.jpg';
import Pic16 from '../../images/properties/maps16.jpg';
import Pic17 from '../../images/properties/maps17.jpg';
import Pic18 from '../../images/properties/maps18.jpg';
import Pic19 from '../../images/properties/maps19.jpg';
import Pic20 from '../../images/properties/maps20.jpg';

const cardPics = [ Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,
                   Pic8,Pic9,Pic10,Pic11,Pic12,Pic13,Pic14,
                   Pic15,Pic16,Pic17,Pic18,Pic19, Pic20 ];

const Card = ({property, activeProperty, setActiveProperty}) => {
      const {price, address, city, picture, bedrooms, bathrooms, carSpaces, index} = property;
      // const pics = require(`${picture}`);
      return(
        <div id={`card-${index}`}
             className={`card col-sm-12 col-md-6 col-lg-4 ${property === activeProperty ? 'is-active' : ''} `}
             onClick={() => {setActiveProperty(property, false)}}>{/* index is set the jump() */}
            <img src={cardPics[index]} alt="Singer" />
            <p className="price">{priceFormat(price)}</p>

            <div className="details">

                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />{address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms}<span className="bedColor">bedrooms</span></li>
                    <li className="icon-bath">{bathrooms}<span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces}<span>parking spots</span></li>
                </ul>

            </div>
        </div>)
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
  activeProperty: PropTypes.object.isRequired,
  setActiveProperty: PropTypes.func.isRequired,
}
export default Card;
