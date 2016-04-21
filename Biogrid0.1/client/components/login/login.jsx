Login = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData() {
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },

  componentDidMount() {
    $('#email').focus();
  },

  getInitialState() {
    return {value: ""}
  },

  handleSubmit(e) {
    e.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email, password, (err) => {
      if(err) {
        if(err.reason.length > 20) {
          alert(err.reason);
        }
        else {
          this.setState({value: err.reason});
          $("#userStatus").slideDown(300);
          $("#password").val('');
        }
      }
      else {
        FlowRouter.go('/site');
      }
    });
  },

  newLogin() {
    $("#userStatus").slideUp(300);
  },

  render() {
    return(
      <div id="loginBox">
        <div className="row">
          <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1" id="login-bg">
            <div className="col-md-12">
              <h3 className="text-center blueText">Login to access your things</h3>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <form onSubmit={this.handleSubmit}>
                  <div className="spacer10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                      <input type="text" ref="email" placeholder="Email address" id="email" className="form-control" onClick={this.newLogin}/>
                    </div>
                  </div>
                  <div className="spacer10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                      <input type="password" ref="password" placeholder="Password" id="password" className="form-control" onClick={this.newLogin}/>
                    </div>
                  </div>
                  <button type="submit"  className="btn form-control blueBtn">Login</button>
                  <span className="label label-danger form-control" id="userStatus">{this.state.value}</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
