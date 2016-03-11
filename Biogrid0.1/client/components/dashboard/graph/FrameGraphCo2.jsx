FrameGraphCo2 = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData(){

    const subscription = Meteor.subscribe('sensors');

    return{
      ready: subscription.ready(),
      sensors: Sensors.find({type:"co2"}).fetch()
    }
  },

  render(){
    return(
      <div>
        <Graph sensors={this.data.sensors}/>
      </div>
    )
  }
})




/*var handle = Meteor.subscribe('sensors');
let data = {};
var sensors = [];

if(handle.ready())
{
  sensors = Sensors.find({type:"co2"}).fetch();
  console.log("sensors in fgco2: ", sensors);
}
//console.log("sensors in fgco2 after if: ", sensors);
return sensors;*/
