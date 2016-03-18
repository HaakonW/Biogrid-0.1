DashboardPage = React.createClass({
  render(){
    return(
      <div id="bg">
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <Metadata />
          </div>
          <div className="col-md-5 col-sm-12">
            <ParentGraph />
          </div>
          <div className="col-md-5 col-sm-12">
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-2">
          </div>
        </div>
      </div>
    )
  }
})
