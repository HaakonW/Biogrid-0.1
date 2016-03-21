Content = React.createClass({

  render(){

    // let status;
    // if(!Meteor.user()) {
    //   status = <h3 className="text-center"> Please log in to access site </h3>
    // } else {
    //   status = <h3 className="text-center">Logged in</h3>
    // }

    return(
      <div id="loginBox">
        <div className="row">
          <div className="col-md-6 col-sm-2 ">
            <div id="loginFields">
                <div className="text-center">
                  <LoginUser />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
