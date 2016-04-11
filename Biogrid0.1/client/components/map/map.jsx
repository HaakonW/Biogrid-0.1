Map = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load({Key: "AIzaSyBDKQkczCHMHcHjDGJuOYvdeuxJ4mz0690"});
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
        {"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},
        {"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},
        {"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},
        {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},
        {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"featureType":"poi","stylers":[{"visibility":"off"}]},
        {"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},
        {"featureType":"transit","stylers":[{"visibility":"off"}]}
      ]
    };
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
