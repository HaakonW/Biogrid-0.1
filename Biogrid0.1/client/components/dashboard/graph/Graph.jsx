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

  _createGraph: function(data){

  var graphString = "";
  //console.log(retur[0]);
  var allValues = this.data.sensors[0];
  //console.log("this is test: ", test[0].day);
  //console.log("this is allValues", allValues[0]);
  //var day = allValues[0].day;
  var day = "2016-02-09";
  for(var key in allValues){
    if(key == "values")
    for(var i in allValues[key]){ // i = hours
      var hour = i;
        //console.log(i);
        for(var j in allValues[key][i]){ // j = minutes
          var minute = j;
          //console.log(j);
          for(var k in allValues[key][i][j]){ // k = seconds
            var second = k;
            var value = allValues[key][i][j][k];
            //console.log("hour:" + hour + "| minute: " + minute + "| second: " + second + "| value: " + value);
            graphString += day + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
          }
        }
    }
  }
      this.g = new Dygraph(
      this.refs.graphDiv,
      "Date,Value\n" + graphString,
      {
        connectSeparatedPoints:false,
        ylabel: 'Value',
        strokeWidth: 2
      }
    );
  },

  componentDidMount: function(){
    this._createGraph();
  },
  componentDidUpdate: function(){
    this._createGraph();
  },


  render(){
    /*if(this.data.sensors){
      var testVar = <div>Hei test</div>
    }*/

    return(
      <div ref="graphDiv">
      </div>
    )
  }
})
