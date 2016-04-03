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
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header collapse navbar-collapse">
              <ul className="nav navbar-nav pull-left">
                <li><a className="navCortex" href="/site">
                  <span className="glyphicon glyphicon-grain" aria-hidden="true"> </span> Biogrid Cortex
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              {userinfo}
            </div>
          </div>
        </div>
        <div className="row" id="subNavBar">
          <ul className="nav navbar-nav">
            <li id="testLi"><a href=""><i className="fa fa-leaf"></i> Holy Cow Oslo</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                My sites<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Holy Cow</a></li>
                <li><a href="#">Green base farm</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Super important<span className="caret"></span></a>
              <ul className="dropdown-menu">
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Settings <i className="fa fa-cog"></i> </a>
              <ul className="dropdown-menu">
                <li><a href="#">Time Period:</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Day</a></li>
                <li><a href="#">Week</a></li>
                <li><a href="#">Month</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Custom data</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">From</a></li>
                <li><a href="#">To</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <Footer />
    </div>
  )
}
});
