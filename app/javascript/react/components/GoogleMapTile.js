import React, { Component } from 'react'

class GoogleMapTile extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    let map;
    //let lat = this.props.coordinates.lat
    //let lng = this.props.coordinates.lng
    //let zoom = this.props.zoom
    window.initMap = this.initMap;

    // let initMap = () => {
    //   map = new google.maps.Map(this.refs.map.getDOMNode(), {
    //   //map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -25.344, lng: 131.036},
    //     zoom: 4
    //   })
    // }
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBokUW-FxetnpYO0wGKnh9ElP_r4t3SjxQ&callback=initMap')
  }

  initMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.361145, lng: -71.057083},
      zoom: 14
    });

    let marker = new google.maps.Marker({position: {lat: 42.361145, lng: -71.057083}, map: map});
  }

  render() {
    return(
      <div className="map-container">
        <div id="map" className="box-shadow"></div>
      </div>
    )
  }
}

export default GoogleMapTile;

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
