let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
        <div key={sensor._id} className="col-md-6 col-sm-12">
            <ParentGraph sensorId={sensor._id} thingId={sensor.thingId} graph={sensor.graph} />
        </div>

      )
    })
    return(
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={1500} transitionEnterTimeout={1500} transitionLeaveTimeout={1000}>
          {rows}
        </ReactCSSTransitionGroup>
    )
  }
})
