SubNavbar = React.createClass({
  handleButtonClicks(period) {
    //timePeriod = new ReactiveVar();
    switch (period) {
      case 'today':
        Session.set('timePeriod', 'today');
        break;
      case 'week':
        Session.set('timePeriod', 'week');
        break;
      case 'month':
        Session.set('timePeriod', 'month');
        break;
      default:
        //Session.set('timePeriod', 'today');
    }
    console.log(Session.get('timePeriod'));
  },

  render(){
    return(
      <nav className="navbar navbar-inverse navbar-static-top" id="subNavbar" role="navigation">
            <div className="navbar-header collapse navbar-collapse">
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
              <ul className="nav navbar-nav">
                <li className="subNavbarLi"><a href="" onClick={this.handleButtonClicks.bind(this, 'today')}>Today</a></li>
                <li className="subNavbarLi"><a href="" onClick={this.handleButtonClicks.bind(this, 'week')}>Week</a></li>
                <li className="subNavbarLi"><a href="" onClick={this.handleButtonClicks.bind(this, 'month')}>Month</a></li>
              </ul>
            </div>
      </nav>

    )
  }
});
