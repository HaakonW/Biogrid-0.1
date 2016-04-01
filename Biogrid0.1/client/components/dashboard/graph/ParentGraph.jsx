ParentGraph = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {};
    data.readings = [];
    const subscriptionReadings = Meteor.subscribe('readings', this.props.sensorId);
    if(subscriptionReadings.ready()) {
      data.readings = Readings.find({sensorId:this.props.sensorId}).fetch();
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
