SubNavbar = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData() {
    const siteId = FlowRouter.getParam("siteId");
    const subscription = Meteor.subscribe('sites');
    return {
      ready: subscription.ready(),
      sites: Sites.find().fetch(),
      siteId: siteId
    }
  },

  componentWillMount() {
    let date = [];
    date[0] = this.getTodaysDate();
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
  },

  componentDidMount() {
    $("#subNavbarToday").css("border-color", "red");
    $('#datepicker').datepicker();
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
        $("#subNavbarToday").css("border-color", "red");
        $("#subNavbarWeek").css("border-color", "#1f1f1f");
        $("#subNavbarMonth").css("border-color", "#1f1f1f");
        $("#subNavbarCustom").css("border-color", "#1f1f1f");
        break;
      case 'week':
        date[0] = this.getRequestedDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7));
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#1f1f1f");
        $("#subNavbarWeek").css("border-color", "red");
        $("#subNavbarMonth").css("border-color", "#1f1f1f");
        $("#subNavbarCustom").css("border-color", "#1f1f1f");
        break;
      case 'month':
        date[0] = this.getRequestedDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#1f1f1f");
        $("#subNavbarWeek").css("border-color", "#1f1f1f");
        $("#subNavbarMonth").css("border-color", "red");
        $("#subNavbarCustom").css("border-color", "#1f1f1f");
        break;
      case 'custom':
        date[0] = this.getRequestedDate(this.refs.start.value);
        date[1] = this.getRequestedDate(this.refs.end.value);
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#1f1f1f");
        $("#subNavbarWeek").css("border-color", "#1f1f1f");
        $("#subNavbarMonth").css("border-color", "#1f1f1f");
        $("#subNavbarCustom").css("border-color", "#red");
        break;
      default:
        //todays date
        date[0] = this.getTodaysDate();
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        break;
    }
  },

  dateRangeHandler() {
    $('#datepicker').datepicker();
    //$('#rangeBtn').css("display", "inline");
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
    let sitesList = [];
    let currentSite = "";
    let temp = this.data.siteId;

    if( this.data.ready) {
      sitesList = this.data.sites.map(function(site){
        let id = site._id;
        let link = "/dashboard/"+id;
        if (temp === id) {
          currentSite = site.name;
        }
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
                {currentSite} <i className="fa fa-caret-down greenIcon"></i> </a>
              <ul className="dropdown-menu" id="yourSites">
                {sitesList}
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="subNavbarLi" id="subNavbarToday"><a href="" onClick={this.handleButtonClicks.bind(this, 'today')}>Today</a></li>
            <li className="subNavbarLi" id="subNavbarWeek"><a href="" onClick={this.handleButtonClicks.bind(this, 'week')}>Last week</a></li>
            <li className="subNavbarLi" id="subNavbarMonth"><a href="" onClick={this.handleButtonClicks.bind(this, 'month')}>Last month</a></li>
            <li className="subNavbarLi" id="subNavbarCustom">
              <div className="input-group input-group-sm input-daterange" id="datepicker">
                <input type="text" className="input-sm form-control dateRangeInput" ref="start" onClick={this.dateRangeHandler}/>
                <span className="input-group-addon">to</span>
                <input type="text" className="input-sm form-control dateRangeInput" ref="end" onClick={this.dateRangeHandler}/>
              </div>
            </li>
            <li><button type="button" className="btn btn-default form-control" id="rangeBtn" onClick={this.handleButtonClicks.bind(this, 'custom')}>GO!</button></li>
          </ul>
        </div>
      </nav>
    )
  }
});
