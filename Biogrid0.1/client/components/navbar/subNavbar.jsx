SubNavbar = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData() {
    let data = {};
    data.sites = [];
    const subscription = Meteor.subscribe('sites');
    return {
      ready: subscription.ready(),
      sites: Sites.find().fetch(),
    }
  },
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
    let sitesList;
    if( this.data.ready) {
      sitesList = this.data.sites.map(function(site){
        let id = site._id;
        let link = "/dashboard/"+id;
        return(
          <div key={site._id}>
            <li><a className="queryLinks" href={link}> {site.name} </a></li>
          </div>
        )
      })
    } else {
      sitesList = <li> Sorry, no sites available or loading </li>
    }
    return(
      <nav className="navbar navbar-inverse navbar-static-top" id="subNavbar" role="navigation">
        <div className="navbar-header collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown subNavbarLi">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Change Site <i className="fa fa-caret-down greenIcon"></i> </a>
              <ul className="dropdown-menu" id="yourSites">
                {sitesList}
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
