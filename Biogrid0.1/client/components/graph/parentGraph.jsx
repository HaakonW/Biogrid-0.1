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
      switch (timePeriod) {
        case 'week':
          data.readings = Readings.find({sensorId:this.props.sensorId, //from 7 days ago
            day: {
              $gte: "2016-29-03",
              $lt: "2016-05-04"
            }}).fetch();
          break;
          case 'month':
          data.readings = Readings.find({sensorId:this.props.sensorId, //from 30 days ago
            day: {
              $gte: "2016-02-08",
              $lt: "2016-05-04"
            }}).fetch();
          break;
        default:
        data.readings = Readings.find({sensorId:this.props.sensorId, day: "2016-02-09"}).fetch(); //today
      }
      //data.readings = Readings.find({sensorId:this.props.sensorId}).fetch();
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
