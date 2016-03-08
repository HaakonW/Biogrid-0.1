Graph = React.createClass({

  shouldComponentUpdate(){
    return false;
  },


  _create: function(){
    //var allValues = this.dataprops.data;
    //console.log("This is in graph: ", {this.props.dataprops} );
  },




/*  var allValues = "";
  //console.log(allValues);


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
      document.getElementById('graf1'),
      "Date,Value\n" + graphString,
      {
        ylabel: 'Value (' + allValues.type + ")",
        title: allValues.type,
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

  /*componentDidMount: function(){
    this._createGraph2();
  },
  componentDidUpdate: function(){
    this._createGraph2();
  },*/



  render(){
    /*if(this.data.sensors){
      var testVar = <div>Hei test</div>
    }*/

    return(
      //<div id="graf1" className="testgraf" ref="graphDiv2"></div>
      <div>test {this.props.data}</div>
    )
  }

})
