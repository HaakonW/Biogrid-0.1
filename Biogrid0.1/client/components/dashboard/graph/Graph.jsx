Graph = React.createClass({

  mixins:[ReactMeteorData],
  getMeteorData(){


    var data = [];

    var handle = Meteor.subscribe('sensors');

    //Use ready() so data dont log before Sensors.find().fetch() is done
    if(handle.ready()){
      data = Sensors.find({}).fetch();
      console.log("This is",data);
    }

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
