Navbar = React.createClass({
    render() {
      let userinfo;
      if(!Meteor.loggingIn() && Meteor.user()) {
          userinfo = <ul className="nav navbar-nav pull-right">
            <li>
              <a className="navCortex" href="/site"> {Meteor.user().emails[0].address}
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a className="navCortex" href="/logout">Logout
                <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </li>
          </ul>;
      }
      else{
        userinfo = <ul className="nav navbar-nav pull-right">
          <li>
            <a className="navCortex" href="http://www.biogrid.no" target="_blank">Biogrid.no <span className="glyphicon glyphicon-home" aria-hidden="true">
              </span>
            </a>
          </li>
        </ul>;
      }
      return (
        <div>
          <nav className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container">
              <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav pull-left"><li>
                        <a className="navCortex" href="/site">
                          <span className="glyphicon glyphicon-grain" aria-hidden="true"> </span> Biogrid Cortex
                        </a>
                      </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse">
                    {userinfo}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
    }
});
