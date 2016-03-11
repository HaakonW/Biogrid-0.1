FrameGraphRh = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData(){

    const subscription = Meteor.subscribe('sensors');

    return{
      ready: subscription.ready(),
      sensors: Sensors.find({type:"rh"}).fetch()
    }
  },

  render(){
    return(
      <div>
        <Graph sensors={this.data.sensors} />
      </div>
    )
  }
})
