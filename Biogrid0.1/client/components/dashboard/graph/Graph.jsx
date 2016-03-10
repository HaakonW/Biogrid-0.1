Graph = React.createClass({

  // FIXME How not to render when theres new data in getMeteorData in FrameGraphCo2
  shouldComponentUpdate:function(nextProps, nextState){
    return true;
  },

  //Loops through this.props.sensors and creates a graph in the div with id=gr
  _createGraph:function(){
    var allValues = this.props.sensors;
    var graphString ="";
    console.log("test in _createGraph allValues", allValues);
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
      document.getElementById('gr'),
      "Date,Value\n" + graphString,
      {
        ylabel: 'Value (' + allValues.type + ")",
        axisLabelColor:'#fff',
        //xlabel: allValues.sensor_id,
        title: allValues.type,
        strokeWidth: 2,
        //gridLineColor: 'rgb(204,0,255)',
        color: 'rgb(255,152,43)',
        fillGraph: true,
        axisLineColor: 'rgb(255,152,43)',
        showRangeSelector: true,
        rangeSelectorHeight: 30,
        rangeSelectorPlotFillColor: 'rgb(255,152,43)',
        rangeSelectorPlotStrokeColor: 'rgb(255,152,43)',
      }
    );
  },

  componentDidMount:function(){
    this._createGraph();
    console.log("after _createGraph");
  },

  componentDidUpdate:function(){
    this._createGraph();
  },

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">co2</h3>
        </div>
        <div className="panel-body">
        <div id="gr" className="testgraf" ref="graphDiv5"></div>
        </div>
      </div>
    )
  }
})
