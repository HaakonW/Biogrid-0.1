FrameGraphCo2 = React.createClass({

  _getTodaysDate: function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10)
      dd='0'+dd
    if(mm<10)
      mm='0'+mm
    var today = yyyy + "-" + mm + "-" + dd;
    return today;
  },

  mixins: [ReactMeteorData],
  getMeteorData(){

    const subscription = Meteor.subscribe('sensors');
    var day = this._getTodaysDate();
    
    return{
      ready: subscription.ready(),
      sensors: Sensors.find({type:"co2", day: day }).fetch()
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
