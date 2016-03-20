Content = React.createClass({

  render(){

    let status;
    if(!Meteor.user()) {
      status = <h3 className="text-center"> Please log in to access site </h3>
    } else {
      status = <h3 className="text-center">Logged in</h3>
    }

    return(
      <div>
        <div className="row">
          <div className="col-md-12 col-sm4 ">
            <div className="jumbotron">
              <h1 className="text-center">Biogrid Cortex</h1>
                <div className="text-center">
                  {status}
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
