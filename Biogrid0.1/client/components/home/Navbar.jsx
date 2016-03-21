Navbar = React.createClass({

    render() {

      let logInWrapper;
      if(!Meteor.loggingIn() && Meteor.user()) {
          logInWrapper = <ul className="nav navbar-nav pull-right">
            <li><a href="#">User | {Meteor.user().emails[0].address}</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>;
      } else {
        logInWrapper = <ul className="nav navbar-nav pull-right">
                          <li><a><AccountsUIWrapper /></a></li>
                      </ul>;
      }

      return (
        <div>
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
                  <span className="navbar-brand">
                  </span>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="/">Biogrid</a></li>
                  </ul>
                  {logInWrapper}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    }
});
