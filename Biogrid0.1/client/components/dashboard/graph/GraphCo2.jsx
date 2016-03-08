GraphCo2 = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData(){
    var data = [];
    var handle = Meteor.subscribe('sensors');

    //Use ready() so data dont log before Sensors.find().fetch() is done
    if(handle.ready()){
      data = Sensors.find({type:"co2"}).fetch();
      console.log("This is Co2",data);
    }
    return{
      sensors: Sensors.find({type:"co2"}).fetch()
    }

  },

  _createGraph: function(data){

  var graphString = "";

  var allValues = this.data.sensors[0];

  //FIXME day is hardcoded, get day from allValues
  var day = allValues.day;
  for(var key in allValues){
    if(key === "values")
    for(var i in allValues[key]){ // i = hours
      var hour = i;
        for(var j in allValues[key][i]){ // j = minutes
          var minute = j;
          for(var k in allValues[key][i][j]){ // k = seconds
            var second = k;
            var value = allValues[key][i][j][k];
            graphString += day + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
            break; //Every minute
          }
        }
    }
  }
      this.g = new Dygraph(
      document.getElementById('test1'),
      "Date,Value\n" + graphString,
      {
        ylabel: 'Value (' + allValues.type + ")",
        //title: allValues.type,
        strokeWidth: 2,
        //gridLineColor: 'rgb(33,150,119)',
        color: 'rgb(33,150,119)',
        fillGraph: true,
        axisLineColor: 'rgb(33,150,119)',
        showRangeSelector: true,
        rangeSelectorHeight: 30,
        rangeSelectorPlotFillColor: 'rgb(33,150,119)',
        rangeSelectorPlotStrokeColor: 'rgb(33,150,119)',

        //fillGraph:true,
        //showRangeSelector:true
        //connectSeparatedPoints:true,
      }
    );
  },

  componentDidMount: function(){
    this._createGraph();
    console.log("cdm1 called");
  },
  componentDidUpdate: function(){
    this._createGraph();
    console.log("cdu1 called");
  },


  render(){
    /*if(this.data.sensors){
      var testVar = <div>Hei test</div>
    }*/

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">co2</h3>
        </div>
        <div className="panel-body">
        <div id="test1" className="testgraf" ref="graphDiv"></div>
        </div>
      </div>
    )
  }
})
