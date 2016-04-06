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

  componentWillMount() {
    let date = [];
    date[0] = this.getTodaysDate();
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
  },

  componentDidMount() {
    $("#subNavBarToday").css("border-color", "red");
  },

  handleButtonClicks(period) {
    //timePeriod = new ReactiveVar();
    let date = [];
    let today = new Date();
    switch (period) {
      case 'today':
        date[0] = this.getTodaysDate();
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavBarToday").css("border-color", "red");
        $("#subNavBarWeek").css("border-color", "#1f1f1f");
        $("#subNavBarMonth").css("border-color", "#1f1f1f");
        break;
      case 'week':
        date[0] = this.getRequestedDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7));
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavBarToday").css("border-color", "#1f1f1f");
        $("#subNavBarWeek").css("border-color", "red");
        $("#subNavBarMonth").css("border-color", "#1f1f1f");
        break;
      case 'month':
        date[0] = this.getRequestedDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavBarToday").css("border-color", "#1f1f1f");
        $("#subNavBarWeek").css("border-color", "#1f1f1f");
        $("#subNavBarMonth").css("border-color", "red");
        break;
      default:
        //todays date
        date[0] = this.getTodaysDate();
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        break;
    }
  },

  getTodaysDate() {
    let date = new Date();
    return date.getFullYear() + "-" +
    ('0' + (date.getMonth() + 1)).slice(-2) + "-" +
    ('0' + date.getDate()).slice(-2);
  },

  getRequestedDate(inDate) {
    let date = new Date(inDate);
    return date.getFullYear() + "-" +
    ('0' + (date.getMonth() + 1)).slice(-2) + "-" +
    ('0' + date.getDate()).slice(-2);
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
            <li className="subNavbarLi" id="subNavBarToday"><a href="" onClick={this.handleButtonClicks.bind(this, 'today')}>Today</a></li>
            <li className="subNavbarLi" id="subNavBarWeek"><a href="" onClick={this.handleButtonClicks.bind(this, 'week')}>Last week</a></li>
            <li className="subNavbarLi" id="subNavBarMonth"><a href="" onClick={this.handleButtonClicks.bind(this, 'month')}>Last month</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});
