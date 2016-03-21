Graph = React.createClass({

  /* FIXME How not to render when theres new data in getMeteorData in FrameGraphCo2
  When return true the graph is displayed
  */
  shouldComponentUpdate:function(nextProps, nextState) {
    return true;
  },

  //check if object is empty
  isEmpty:function(obj) {
    let hasOwnProperty = Object.prototype.hasOwnProperty;

    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    for(var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  },

  //check if object has more days than one
  isObjectMoreThanOneDay:function(obj) {
      return obj.length > 1
  },

  writeGraphStringSeveralDays:function(allValues){
    //console.log("severalDays", allValues);
    let graphString = "";
    let sensorType;
    //TODO type = ?
    for (let day = 0; day < allValues.length; day++) {
      let dayDate = allValues[day].day;
      for (let key in allValues[day]) {
        if (key === "values") {
          for (let hour in allValues[day][key]) {
            for (let minute in allValues[day][key][hour]) {
              for (let second in allValues[day][key][hour][minute]) {
                let value = allValues[day][key][hour][minute][second];
                graphString += dayDate + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
                break; //only 1 post pr minute, not every second
              }
            }
          }
        }
      }
    }
    return graphString;
  },

  writeGraphStringOneDay:function(allValues){
    allValues = allValues[0];
    let graphString = "";
    let sensorType;
    //TODO type = ?
    let dayDate = allValues.day;

    for (let key in allValues) {
      if (key === "values") {
        for (let hour in allValues[key]) {
          for (let minute in allValues[key][hour]) {
            for (let second in allValues[key][hour][minute]) {
              let value = allValues[key][hour][minute][second];
              graphString += dayDate + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
              break; //only 1 post pr minute, not every second
            }
          }
        }
      }
    }
    return graphString;
  },

  createGraph:function(){
    let sensorData = this.props.sensors; //TODO this.props.readings
    //console.log("createGraph", sensorData);
    let graphString;
    if (this.isEmpty(sensorData)) {
      graphString = ",\n0,0";
      this.g = new Dygraph(
        this.graf, graphString,
        {
          title:'No data available',
          pointSize: 0,
          highlightCircleSize: 0,
          showLabelsOnHighlight:false
        }
      );
    }
    else {
      graphString = this.isObjectMoreThanOneDay(sensorData) ? this.writeGraphStringSeveralDays(sensorData) : this.writeGraphStringOneDay(sensorData);
      this.g2 = new Dygraph(
        /*document.getElementById('graf')*/
        this.graf,
        "Date,Value\n" + graphString,
        {
          ylabel: 'Value (type N/A)', // TODO fix this to get the sensors.graph.graphType
          axisLabelColor:'#fff',
          //xlabel: allValues.sensor_id,
          title: sensorData.type, //TODO fix this to get the sensors.sensorType
          strokeWidth: 2,
          //gridLineColor: 'rgb(204,0,255)',
          color: 'rgb('+this.props.color+')', //TODO get colors based on graphType
          fillGraph: true,
          axisLineColor: 'rgb('+this.props.color+')', //TODO get colors based on graphType
          showRangeSelector: true,
          rangeSelectorHeight: 30,
          rangeSelectorPlotFillColor: 'rgb('+this.props.color+')', //TODO get colors based on graphType
          rangeSelectorPlotStrokeColor: 'rgb('+this.props.color+')', //TODO get colors based on graphType
        }
      );
    }
  },

  componentDidMount:function(){
    //this.createGraph();
    //console.log("didMount");
  },

  componentDidUpdate:function(){
    if (this.props.ready) this.createGraph(); //waits until all data is ready to draw the graph
    //console.log("didUpdate");
  },

  render(){
    return(
      //TODO if data
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">tittel</h3>
        </div>
        <div className="panel-body">
        {this.props.ready ? <div id="graf" className="graph" ref={(ref) => this.graf = ref}></div> : <div className="text-center"><i className="fa fa-spinner fa-pulse fa-5x"></i></div>}
        </div>
      </div>
    )
  }
})
