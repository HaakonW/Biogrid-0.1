Content = React.createClass({
userStatus(){
  if (!Meteor.user()) {
    return (
    <h3 className="text-center">Please log in to access site.</h3>
    );
  }
  else {
    return (
      <h3 className="text-center">Logged in</h3>
    )
    //FlowRouter.route('/Dashboard')
  }
},

  render(){
      return(
        <div>
          <div className="row">
            <div className="col-md-12 col-sm4 ">
              <div className="jumbotron">
                <h1 className="text-center">Biogrid Cortex</h1>
                  <div className="text-center">
                    {this.userStatus()}
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
})
