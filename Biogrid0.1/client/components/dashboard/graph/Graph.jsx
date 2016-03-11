Graph = React.createClass({

  /* FIXME How not to render when theres new data in getMeteorData in FrameGraphCo2
  When return true the graph is displayed
  */
  shouldComponentUpdate:function(nextProps, nextState){
    return true;
  },

  //Loops through this.props.sensors and creates a graph in the div with id=gr
  _createGraph:function(){
    var allValues = this.props.sensors;
    var graphString ="";
    var type;
    //var day = allValues.day;

    //more than one day
    if(Object.keys(allValues).length > 1)
    { //if data contains more than one day
      type = allValues[0].type;
      for(var i = 0; i < allValues.length; i++){
        var dayDate = allValues[i].day;
        for(var key in allValues[i]){
          if(key === "values"){
            for(var j in allValues[i][key]){ // i = hours
              var hour = j;
                for(var k in allValues[i][key][j]){ // j = minutes
                  var minute = k;
                  for(var h in allValues[i][key][j][k]){ // k = seconds
                    var second = h;
                    var value = allValues[i][key][j][k][h];
                    graphString += dayDate + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
                    break; //Every minute
                  }
                }
            }
          }
        }
      }
    }//end if
    else if(Object.keys(allValues).length === 1)
    {
      allValues = allValues[0];
      type = allValues.type;
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
                break;
              }
            }
        }
      }
    }


      this.g2 = new Dygraph(
      /*document.getElementById('graf')*/
      this.graf,
      "Date,Value\n" + graphString,
      {
        ylabel: 'Value (' + type + ")",
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
          <h3 className="panel-title text-center">tittel</h3>
        </div>
        <div className="panel-body">
        <div id="graf" className="testgraf" ref={(ref) => this.graf = ref}></div>
        </div>
      </div>
    )
  }
})
