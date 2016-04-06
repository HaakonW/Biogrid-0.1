ParentGraph = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {};
    data.readings = [];
    data.thing = "";
    const subscriptionReadings = Meteor.subscribe('readings', this.props.sensorId);
    const subscriptionThings = Meteor.subscribe('things', this.props.thingId);

    let timePeriod = Session.get('timePeriod');

    if(subscriptionReadings.ready()) {
      let date = Session.get('timePeriod');
        data.readings = Readings.find({sensorId:this.props.sensorId,
          day:
          {
            $gte: date[0],
            $lte: date[1]
          }}).fetch();
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
        <div className="oneGraph">
          <Graph sensors={this.data.readings} color={this.props.graph.color} graphType={this.props.graph.graphType} thingDescription={this.data.thing} />
        </div>
      )
    }
})
