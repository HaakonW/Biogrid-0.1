if (Meteor.isClient) { Meteor.startup(function() { GoogleMaps.load();}); } 

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
