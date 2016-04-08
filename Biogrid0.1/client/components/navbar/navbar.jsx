Navbar = React.createClass({
  render() {
    let userinfo;
    if(!Meteor.loggingIn() && Meteor.user()) {
      userinfo = <ul className="nav navbar-nav pull-right">
        <li className="dropdown">
          <a className="dropdown-toggle navCortex" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {Meteor.user().emails[0].address}
          </a>
          <ul className="dropdown-menu" id="userOptions">
            <li className="">Logout</li>
          </ul>
        </li>
      </ul>;
    }

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
            <div className="navbar-header collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a className="navCortex" href="/site">Biogrid Cortex</a>
                </li>
              </ul>
            </div>
            <div className="">
              {userinfo}
            </div>
      </nav>
    </div>
  )
}
});
