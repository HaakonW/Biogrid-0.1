ParentGraph = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {};
    data.readings = [];
    data.thing = [];
    const subscriptionReadings = Meteor.subscribe('readings', this.props.sensorId);
    const subscriptionThings = Meteor.subscribe('things', this.props.thingId);

    if(subscriptionReadings.ready()) {
      data.readings = Readings.find({sensorId:this.props.sensorId}).fetch();
    }
    if(subscriptionThings.ready()) {
      data.thing = Things.find({_id:this.props.thingId}).fetch();
    }
    return data;
  },

  //TODO colors have to be choosen by graphType
  render() {
      return (
        <div>
          <Graph sensors={this.data.readings} color={"246,75,218"} />
        </div>
      )
    }
})
