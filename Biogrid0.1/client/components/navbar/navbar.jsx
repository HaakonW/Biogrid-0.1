Navbar = React.createClass({
  render() {
    let userinfo;
    if(!Meteor.loggingIn() && Meteor.user()) {
      userinfo = <ul className="nav navbar-nav pull-right">
        <li>
          <a className="navCortex" href="/site"> {Meteor.user().emails[0].address}
            <span className="glyphicon glyphicon-user greenIcon " aria-hidden="true"></span>
          </a>
        </li>
        <li>
          <a className="navCortex" href="/logout">Logout
            <span className="glyphicon glyphicon-off greenIcon" aria-hidden="true"></span>
          </a>
        </li>
      </ul>;
    }
    else{
      userinfo = <ul className="nav navbar-nav pull-right">
        <li>
          <a className="navCortex" href="http://www.biogrid.no" target="_blank">Biogrid.no <span className="glyphicon glyphicon-home greenIcon" aria-hidden="true">
          </span>
        </a>
      </li>
    </ul>;
  }
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header collapse navbar-collapse">
              <ul className="nav navbar-nav pull-left">
                <li><a className="navCortex" href="/site">
                  <span className="glyphicon glyphicon-grain" aria-hidden="true"></span> Biogrid Cortex
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              {userinfo}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
});
