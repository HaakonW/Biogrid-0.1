Site = React.createClass({
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

  render() {
    let sitesList;
    if( this.data.ready) {
      sitesList = this.data.sites.map(function(site){
        let id = site._id;
        let link = "/dashboard/"+id;
        return(
          <div key={site._id} className="col-md-6 col-sm-12">
            <div className="col-md-12 siteWrapper">
              <a className="blueText" href={link}>
                <h4 className="text-center"> {site.name}  </h4>
                <Map lat={site.latitude} lng={site.longitude} />
              </a>
            </div>
          </div>
        )
      })
    }
    else {
      sitesList = <div className="col-md-4 col-md-offset-4 col-sm-12 noDataMessage">
                    <NoDataMessage datatype={"sites"} />
                  </div>
    }
    return(
      <div className="">
        <Navbar />
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {sitesList}
          </div>
        </div>
      </div>
    )
  }
})
