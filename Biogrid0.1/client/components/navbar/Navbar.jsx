Navbar = React.createClass({
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#navbarCollapse"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">User and location</a>
          </div>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Empty</a></li>
              <li><a href="#">Empty2</a></li>
              <li><a href="#">Log out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})
