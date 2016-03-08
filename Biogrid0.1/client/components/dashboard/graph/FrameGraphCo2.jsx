FrameGraphCo2 = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData(){

    var handle = Meteor.subscribe('sensors');
    let data = {};
    var sensors = [];

    if(handle.ready())
    {
      sensors = Sensors.find({type:"co2"}).fetch();
      console.log("sensors in fgco2: ", sensors);
    }
    return sensors;
  },
  render(){
    return (
      <div>
        <Graph data={this.data}/>
      </div>

    )
  }
})
