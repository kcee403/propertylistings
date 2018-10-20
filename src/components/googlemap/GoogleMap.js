import * as React from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        markers: [],
    }
  }

componentWillReceiveProps(nextProps) {
    const {activeProperty, filteredProperties, isFiltering} = nextProps;
    const {latitude, longitude, index} = activeProperty;

    const {markers} = this.state;

    // hide all other pop up address labels
    this.hideAllAddressLabels();

    // this.showAddressLabel(index);
    if(isFiltering && filteredProperties.length === 0) {
      this.hideAllAddressLabels();
    }
      else {
        // else, still hide all labels so the line below state will render afterward hiding all labels.
        this.hideAllAddressLabels();
            // show pop up address labels
        this.showAddressLabel(index);
      }
    console.log("Component Will Mount active property index: ", activeProperty.index);
}

showAddressLabel(index) {
    const {markers} = this.state;
    markers[index] && markers[index].addressLabel.open(this.gmaps, markers[index]);
}

hideAllAddressLabels = () => {
    const {markers} = this.state;

    markers.forEach(marker => {
        marker.addressLabel.close();
    })
}

componentDidMount() {  // STACK OVER FLOW //
  const {properties, activeProperty} = this.props;
  const {latitude, longitude} = activeProperty;
  this.gmaps = this.createGMaps(latitude, longitude);
  this.createMarkers(properties); //takes properties after componentDidMount pulls out this.props & splits activeProperty into latitude, longitude
}

createGMaps(latitude, longitude) {
  let options = {
      zoom: 15,
      center: {lat: latitude, lng: longitude},
      mapTypeControl: false,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  return new window.google.maps.Map(this.refs.map, options);
}

componentDidUpdate() {
  const {filteredProperties, isFiltering} = this.props;
  const {markers} = this.state;

  markers.forEach(marker => {
    const {property} = marker; // what is the associated property

    if(isFiltering) {

      // show markers of fitered properties
      if(filteredProperties.includes(property)) {

        markers[property.index].setVisible(true);
      } else {
        // hide all other markers
        markers[property.index].setVisible(false);
      }

    } else {
       // show all markers
       markers[property.index].setVisible(true);
    }
  })
}

createMarkers(properties){
    const {setActiveProperty, activeProperty} = this.props;
    const activePropertyIndex = activeProperty.index;
    const {markers} = this.state;

    properties.map(property => {
        const {latitude, longitude, index, address} = property; // each property is split up in map() then deconstructed to individual data
        this.marker = new window.google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            map: this.gmaps,
            label: {
                color: '#ffffff',
                text: `${index+1}`
            },
            property
        });

        // create info window for each marker
        const addressLabel = new window.google.maps.InfoWindow({
            content: `<h1>${address}</h1>`
        })

        this.marker.addressLabel = addressLabel;


        // add event listener to each marker
        this.marker.addListener('click', () => {
            console.log("'GoogleMap' Create Marker method, Active Property Index: ", activePropertyIndex);

            //hide all pop up address labels
            this.hideAllAddressLabels();
            // set active property onto the state
            setActiveProperty(property, true);

        });

        // push this marker to the markers array on the state
        markers.push(this.marker);

        // show active property address label window
        this.showAddressLabel(activePropertyIndex);

    });

}

  render() {
    return (
      <div className="mapContainer">
        <div id="map" ref="map">
        </div>
      </div>

    );
  }
}

GoogleMap.propTypes = {
  properties: PropTypes.array.isRequired,
  setActiveProperty: PropTypes.func.isRequired,
  activeProperty: PropTypes.object.isRequired,
  filteredProperties: PropTypes.array,
  isFiltering: PropTypes.bool.isRequired
};

export default GoogleMap;
