ParentGraph = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    //TODO subscribe to data from Mongo. From Readings
    // readings = Meteor.subscribe(<name>);

    //Fetch data with params from user(userID) or buttonclicks

    const subscription = Meteor.subscribe('sensors');
    /*if ( subscription.ready()) {
      return {
        sensors: Sensors.find({}).fetch(),
      }
    }*/
    return{
      ready: subscription.ready(),
      sensorsRH: Sensors.find({type:"rh"}).fetch(),
      sensorsCo2: Sensors.find({type:"co2"}).fetch()
    }
  },

  render() {
      //TODO should map through returned types and make a graph component
      return (
        <div>
          <Graph sensors={this.data.sensorsRH} ready={this.data.ready} color={"246,75,218"} />
          <Graph sensors={this.data.sensorsCo2} ready={this.data.ready} color={"255,152,43"} />
        </div>
      )
    }
})
