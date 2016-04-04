SubNavbar = React.createClass({
  render(){
    return(
      <div className="row" id="subNavBar">
        <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Current Site <i className="fa fa-caret-down greenIcon"></i> </a>
              <ul className="dropdown-menu">
                <li><a href="#">Time Period:</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Day</a></li>
                <li><a href="#">Week</a></li>
                <li><a href="#">Month</a></li>
                <li role="separator" className="divider"></li>
                <li className="subNavbarLi"><a href="#">Custom data</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">From</a></li>
                <li><a href="#">To</a></li>
              </ul>
            </li>
        </ul>
        <ul className="nav navbar-nav pull-right">
          <li className="subNavbarLi"><a href="">Day</a></li>
          <li className="subNavbarLi"><a href="">Week</a></li>
          <li className="subNavbarLi"><a href="">Month</a></li>
        </ul>
      </div>
    )
  }
});
