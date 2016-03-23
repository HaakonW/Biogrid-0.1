Login = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },

  handleSubmit(e){
    e.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let user = Meteor.loginWithPassword(email, password, function(err){
        if(err){
          console.log(err.reason);
        }
        else {
          console.log("bruker logget inn");
          FlowRouter.go('/site');
        }
    });
    //FlowRouter.go("/site");
  },

  render(){
    return(
      <div id="loginBox">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Please sign in</h3>
            </div>

            <div className="row row-centered">
              <div className="col-md-4 col-centered">
                <form onSubmit={this.handleSubmit} >
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                      <input type="text" ref="email" placeholder="Email address" id="email" className="form-control"/>
                    </div>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" ref="password" placeholder="Password" className="form-control"/>
                      </div>
                  <button type="submit" className="btn btn-primary form-control">Login</button>
                </form>
                <div ref="responefield">
                  <p>Responsefield</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
    )
  }
});
