Graph = React.createClass({

  /* FIXME How not to render when theres new data in getMeteorData in FrameGraphCo2
  When return true the graph is displayed
  */
  shouldComponentUpdate:function(nextProps, nextState){
    return true;
  },

  //Loops through this.props.sensors and creates a graph in the div with id=gr
  _createGraph:function(){
    let allValues = this.props.sensors;
    let graphString ="";
    let type;
    //let day = allValues.day;

    //more than one day
    if(Object.keys(allValues).length > 1)
    { //if data contains more than one day
      type = allValues[0].type;
      for(let i = 0; i < allValues.length; i++){
        let dayDate = allValues[i].day;
        for(let key in allValues[i]){
          if(key === "values"){
            for(let j in allValues[i][key]){ // i = hours
              let hour = j;
                for(let k in allValues[i][key][j]){ // j = minutes
                  let minute = k;
                  for(let h in allValues[i][key][j][k]){ // k = seconds
                    let second = h;
                    let value = allValues[i][key][j][k][h];
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
      let day = allValues.day;

      for(let key in allValues){
        if(key === "values"){
          for(let i in allValues[key]){ // i = hours
            let hour = i;
              for(let j in allValues[key][i]){ // j = minutes
                let minute = j;
                for(let k in allValues[key][i][j]){ // k = seconds
                  let second = k;
                  let value = allValues[key][i][j][k];
                  graphString += day + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
                  break;
                }
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
