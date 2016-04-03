ParentGraph = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {};
    data.readings = [];
    data.thing = "";
    const subscriptionReadings = Meteor.subscribe('readings', this.props.sensorId);
    const subscriptionThings = Meteor.subscribe('things', this.props.thingId);

    if(subscriptionReadings.ready()) {
      data.readings = Readings.find({sensorId:this.props.sensorId}).fetch();
    }
    if(subscriptionThings.ready()) {
      let thing = Things.find({_id:this.props.thingId}).fetch();
      data.thing = thing[0].description;
    }
    return data;
  },

  //TODO colors have to be choosen by graphType
  render() {
      return (
        <div>
          <Graph sensors={this.data.readings} color={this.props.graph.color} graphType={this.props.graph.graphType} thingDescription={this.data.thing} />
        </div>
      )
    }
})
