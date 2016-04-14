Navbar = React.createClass({
  render() {
    let userinfo;
    if(!Meteor.loggingIn() && Meteor.user()) {
      userinfo = Meteor.user().emails[0].address;
    }
    return (
        <nav className="navbar navbar-inverse" id="topNavbar">
          <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-toggle" id="logOutToggle" href="/logout">Log out</a>
                <a className="navbar-brand" href="/site">Biogrid Cortex</a>
              </div>

              <div id="logoutNavbar" className="collapse navbar-collapse pull-right">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      {userinfo} <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" id="testDrop">
                    <li><a href="/site"><i className="fa fa-list"></i> My Sites</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/logout"><i className="fa fa-power-off"></i> Log out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
});
