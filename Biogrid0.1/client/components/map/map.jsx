Map = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load();
  },

  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this.mapOptions()
    };
  },

  mapOptions() {
    return {
      center: new google.maps.LatLng(this.props.lat, this.props.lng),
      //FIXME id is now a combination of lat and long. Not good?
      id: this.props.lat + this.props.lng,
      zoom: 13,
      scrollwheel: false,
      disableDefaultUI: true,
      draggable:false,
      styles: [
        {"stylers": [{"hue": "#ff1a00"},{"invert_lightness": true},{"saturation": -100},{"lightness": 33},{"gamma": 0.5}]},
        {"featureType":"water","elementType": "geometry","stylers":[{"color": "#2aa9dc"},{"saturation":30},{"lightness":-35}]},
        {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#1db954"},{"lightness":-20},{"saturation":-60},{"weigth":0.1}]},
        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},
        {"featureType":"poi","stylers":[{"visibility":"off"}]},
        {"featureType":"transit","stylers":[{"visibility":"off"}]},
        {"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#7c7878"},{"lightness":-50},{"saturation":-60}]},
      ]
    }
  },

  render() {
    if(this.data.loaded) {
      return <GoogleMap name={this.data.mapOptions.id} options={this.data.mapOptions} />;
    }
    return <div className="text-center">Loading Map</div>;
  }
});

GoogleMap = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: ReactDOM.findDOMNode(this),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      let marker = new google.maps.Marker({
        position:map.options.center,
        map: map.instance,
      });
      //FIXME marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    });
  },

  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    }
  },
  render() {
    return <div className="map-container"></div>;
  }
});
