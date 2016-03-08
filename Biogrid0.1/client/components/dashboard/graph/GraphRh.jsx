GraphRh = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData(){
    var data = [];
    var handle = Meteor.subscribe('sensors');

    //Use ready() so data dont log before Sensors.find().fetch() is done
    if(handle.ready()){
      data = Sensors.find({type:"rh"}).fetch();
      console.log("This is rh",data);
    }
    return{
      sensors: Sensors.find({type:"rh"}).fetch()
    }

  },

  _createGraph2: function(data){

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
          }
        }
    }
  }
      this.g2 = new Dygraph(
      document.getElementById('test2'),
      "Date,Value\n" + graphString,
      {
        ylabel: 'Value (' + allValues.type + ")",
        //title: allValues.type,
        strokeWidth: 2,
        //gridLineColor: 'rgb(204,0,255)',
        color: 'rgb(204,0,255)',
        fillGraph: true,
        axisLineColor: 'rgb(204,0,255)',
        showRangeSelector: true,
        rangeSelectorHeight: 30,
        rangeSelectorPlotFillColor: 'rgb(204,0,255)',
        rangeSelectorPlotStrokeColor: 'rgb(204,0,255)',

        //fillGraph:true,
        //showRangeSelector:true
        //connectSeparatedPoints:true,
      }
    );
  },

  componentDidMount: function(){
    this._createGraph2();
    console.log("cdm2");
  },
  componentDidUpdate: function(){
    this._createGraph2();
    console.log("cdu2");
  },


  render(){
    /*if(this.data.sensors){
      var testVar = <div>Hei test</div>
    }*/

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">rh</h3>
        </div>
        <div className="panel-body">
        <div id="test2" className="testgraf" ref="graphDiv2"></div>
        </div>
      </div>
    )
  }
})