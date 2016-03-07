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
            <Graph />
          </div>
        </div>
      </div>
    )
  }
})
