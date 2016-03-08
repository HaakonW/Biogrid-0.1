DashboardPage = React.createClass({
  render(){
    return(
      <div>
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
      </div>
    )
  }
})
