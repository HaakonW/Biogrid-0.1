NavBar = React.createClass({

    /*FIXME navlinks can not be a method used in render(). Make it a variable
    in render.*/
    navLinks() {
      if (!Meteor.loggingIn() && Meteor.user()) {
        FlowRouter.go("/site");
        return (
          <ul className="nav navbar-nav pull-right">
            <li><a href="#profile">{Meteor.user().emails[0].address}</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        );
      }
      else {
        return (
          <ul className="nav navbar-nav pull-right">
            <li><a href="#"><AccountsUIWrapper /></a></li>
          </ul>
        );
      }
    },

    render() {
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
                  {this.navLinks()}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    }
});
