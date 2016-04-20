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

  render() {
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

      <nav className="navbar navbar-inverse" id="subNavbar">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="dropdown subNavbarLi">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {currentSite} <i className="fa fa-caret-down blueIcon"></i></a>
          <ul className="dropdown-menu" id="yourSites">
            {sitesList}
          </ul>
        </li>
      </ul>
        <CustomRange/>
    </div>
  </div>
</nav>

    )
  }
});
