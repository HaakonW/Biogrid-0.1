DashboardPage = React.createClass({
  render(){
    return(
      <div className="">
        <Navbar />
        <div className="row">
          <div className="col-md-2">
            <Metadata />
          </div>
          <div className="col-md-10">
            Interactive components
            <div className="row graphRow">
              <div className="col-md-5">
                <Graph/>
              </div>
              <div className="col-md-5">
                Second graph
              </div>
            </div>
            <div className="row extraFunctionality">
              <div className="col-md-5">
                Weather
              </div>
              <div className="col-md-5">
                Google maps
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
