Graph = React.createClass({

  mixins:[ReactMeteorData],
  getMeteorData(){


    var data = [];

    Meteor.subscribe('sensors');

    data = Sensors.find({}).fetch();
    console.log("This is",data);
    return{
      sensors: Sensors.find({}).fetch()
    }

  },

  render(){

    if(this.data.sensors){
      var testVar = <div>Hei test</div>
    }
    return(
      <div className="jumbotron">
        {testVar}
      </div>
    )
  }
})
