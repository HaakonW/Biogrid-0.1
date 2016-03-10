DashboardPage = React.createClass({
  render(){
    return(
      <div id="bg">
        <Navbar />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <Metadata />
          </div>
          <div className="col-md-5 col-sm-12">
            <GraphCo2 />
          </div>
          <div className="col-md-5 col-sm-12">
              <GraphRh />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-2">
            <FrameGraphCo2 />
          </div>
        </div>
      </div>
    )
  }
})
