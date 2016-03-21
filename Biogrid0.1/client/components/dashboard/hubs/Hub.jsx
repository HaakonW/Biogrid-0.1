Hub = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.sensor = {}; //_id, sensorType, graph{}, uuid, hubId, thingId

    //subscribe to Sensors1 with this.props.hubId
    const subscriptionSensors1 = Meteor.subscribe('sensors1', this.props.hubId);
    if(subscriptionSensors1.ready()) {
      data.sensor = Sensors1.find().fetch();

      data.sensor.map(function(sensor){
        //console.log("one sensor: ", sensor);

        //FIXME things.find returns two objects. Should check out callback and make functions
        let subscriptionReading = Meteor.subscribe('readings', sensor._id);
        if(subscriptionReading.ready()) {
          sensor.reading = Readings.find().fetch();
          let subscriptionThings = Meteor.subscribe('things', sensor.thingId);
          if(subscriptionThings.ready()) {
            let tmp = Things.find().fetch();
            console.log("things.find", tmp);
            //data.sensors.thingDescription = tmp.description
          }
        }
        console.log("sensor: ", sensor);
      })
    }
    return data;
  },
  /*subscribeSensor() {
    const subscrSensors1 = Meteor.subscribe('sensors1',this.props.hubId);
    if(subscrSensors1.ready()) {
      data.sensor = Sensors1.find().fetch();
    }
  },*/

  render(){
    return(
      <div>tom</div>
    )
  }
})
