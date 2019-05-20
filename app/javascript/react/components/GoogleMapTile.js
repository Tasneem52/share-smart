import React, { Component } from 'react'

class GoogleMapTile extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAFkHmyAunNglCQrs-NVgsENeu7klfgB_I&callback=initMap')
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
