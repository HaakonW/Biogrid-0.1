Nav = React.createClass({
  user() {
    return Meteor.user();
  },

  checkLoginStatus() {
    if (!Meteor.loggingIn() && Meteor.user()) { //User is logged in or did log in
      console.log("USER IS LOGGED IN");
      return (
        <ul className="nav navbar-nav pull-right">
          <li><a href="#profile">{this.user().emails[0].address}</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      );

    } else {
      console.log("USER IS NOT LOGGED IN");
      return (
        <ul className="nav navbar-nav pull-right">
          <li><a href="/sign-in">Sign In</a></li>
          <li><a href="/sign-up">Sign Up</a></li>
        </ul>
      );
    }
  },

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
              </ul>
              {this.checkLoginStatus()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
});
