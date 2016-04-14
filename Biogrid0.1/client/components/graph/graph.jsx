Graph = React.createClass({
  //check if object is empty
  isEmpty(obj) {
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
  isObjectMoreThanOneDay(obj) {
      return obj.length > 1
  },

  writeGraphStringSeveralDays(allValues) {
    let graphString = "";
    let sensorType;
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

  writeGraphStringOneDay(allValues) {
    allValues = allValues[0];
    let graphString = "";
    let sensorType;
    let dayDate = allValues.day;
    for (let key in allValues) {
      if (key === "values") {
        for (let hour in allValues[key]) {
          for (let minute in allValues[key][hour]) {
            for (let second in allValues[key][hour][minute]) {
              let value = allValues[key][hour][minute][second];
              graphString += dayDate + " " + hour + ":" + minute + ":" + second + "," + value + "\n";
              //break; //only 1 post pr minute, not every second
            }
          }
        }
      }
    }
    return graphString;
  },

  createGraph() {
    let sensorData = this.props.sensors;
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
        this.graf,
        "Date,Value\n" + graphString,
        {
          ylabel: this.props.graphType,
          axisLabelColor:'#2aa9dc',
          drawGrid: false,
          title: sensorData.type,
          drawPoints: true,
          strokeWidth: 0,
          pointSize: 0.5,
          color: 'rgb('+this.props.color+')',
          fillGraph: true,
          axisLineColor: 'rgb('+this.props.color+')',
          showRangeSelector: true,
          rangeSelectorHeight: 30,
          //retainDateWindow is new. Should keep zoom level when new data
          retainDateWindow:true,
          rangeSelectorPlotFillColor: 'rgb('+this.props.color+')',
          rangeSelectorPlotStrokeColor: 'rgb('+this.props.color+')',
        }
      );
    }
  },

  componentDidMount() {
    //this.createGraph();
    //console.log("didMount");
  },

  componentDidUpdate() {
    if (this.props.sensors) this.createGraph(); //waits until all data is ready to draw the graph
  },

  render() {
    return(
      //FIXME have to use a ready-function to show spinners while data is loading
      <div>
        <h4 className="text-center blueText">{this.props.thingDescription}</h4>
        <div className="graph" ref={(ref) => this.graf = ref}></div>
      </div>
    )
  }
})
