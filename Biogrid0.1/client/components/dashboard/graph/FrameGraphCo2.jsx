FrameGraphCo2 = React.createClass({

  _getTodaysDate: function(){
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10)
      dd='0'+dd
    if(mm<10)
      mm='0'+mm
    return yyyy + "-" + mm + "-" + dd;
  },

  mixins: [ReactMeteorData],
  getMeteorData(){

    const subscription = Meteor.subscribe('sensors');
    const day = this._getTodaysDate();

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




/*const handle = Meteor.subscribe('sensors');
let data = {};
const sensors = [];

if(handle.ready())
{
  sensors = Sensors.find({type:"co2"}).fetch();
  console.log("sensors in fgco2: ", sensors);
}
//console.log("sensors in fgco2 after if: ", sensors);
return sensors;*/
