Hub = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){

  },
  render(){
    return(
      <div>
        <div className="row topRowHub">
          <div className="col-md-12 col-sm-12">
            One large graph for first thing. ParentGraph
          </div>
        </div>
        <div className="row bottomRowHub">
          <div className="col-md-12 col-sm-12">
            Small graphs for rest of the things. Component should be col-md-4
          </div>
        </div>
      </div>
    )
  }
})
