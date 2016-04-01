Login = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },

  getInitialState: function(){
    return {value: ""}
  },

  handleSubmit(e){
    e.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({value: err.reason});
      }
      else {
        FlowRouter.go('/site');
      }
    });
  },

  render(){
    return(
      <div id="loginBox">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">login to access your things</h3>
            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="spacer10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                      <input type="text" ref="email" placeholder="Email address" id="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="spacer10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                      <input type="password" ref="password" placeholder="Password" className="form-control"/>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary form-control greenBtn">Login</button>
                </form>
                <div>
                  <br/>
                  <p className="text-center greenBtn">{this.state.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
