ParentGraph = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    //TODO subscribe to data from Mongo. From Readings
    //Fetch data with params from user
    // readings = Meteor.subscribe(<name>);
    const subscription = Meteor.subscribe('sensors');
    /*if ( subscription.ready()) {
      return {
        sensors: Sensors.find({}).fetch(),
      }
    }*/
    return{
      sensors: Sensors.find({type:"rh",day:"2016-03-15"}).fetch()
    }
  },

  render() {
      //return Graph.jsx with data from getMeteorData
      // this.props.<name>
      if (this.data.sensors) {
        console.log("INSIDE IF THIS.DATA.SENSORS");

        /* TODO map through results in readings and create a Graph component
          for every results
        */
        return(
          <div>
            //{this.data.sensors.map((graph => <Graph sensors={graph.values} key={graph.index} />))}
            <Graph sensors={this.data.sensors} />
          </div>
        )
      } else {
        //TODO Return spinner
        return (
          <div className="jumbotron"> Loading...</div>
        )
      }
  }
})
