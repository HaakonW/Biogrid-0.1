Hub = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.sensors = [];
    const subscriptionSensors = Meteor.subscribe('sensors1', this.props.hubId);
    if(subscriptionSensors.ready()) {
      data.sensors = Sensors1.find({hubId:this.props.hubId}).fetch();
    }
    return data;
  },

  render(){
    var rows = this.data.sensors.map(function(sensor) {
      return (
        <div className="col-md-6 col-sm-12">
            <ParentGraph key={sensor._id} sensorId={sensor._id} />
        </div>

      )
    })

    return(
      <div> {rows} </div>
    )
  }
})
