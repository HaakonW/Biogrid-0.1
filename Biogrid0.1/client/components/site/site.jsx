Site = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){

    let data = {};
    data.sites = [];
    const subscription = Meteor.subscribe('sites');

    /*FIXME added message when sites not available, but the message renders first
    even though the sites are available. Think a solution is more like the one
    underneath the return. Just as solved in Hub-component
    */
    return {
      ready: subscription.ready(),
      sites: Sites.find().fetch(),
    }
    /*if(subscription.ready()) {
      data.sites = Sites.find({}).fetch();
    }
    return data;*/
  },

  render(){
    let sitesList;
    if( this.data.ready) {
          sitesList = this.data.sites.map(function(site){
            let id = site._id;
            let link = "/dashboard/"+id;
          return(
              <div key={site._id} className="col-md-6 col-sm-12">
                <div className="col-md-12 siteWrapper">
                  <a className="site-links" href={link}>
                  <h4 className="text-center"> {site.name}  </h4>
                    <Map lat={site.latitude} lng={site.longitude} />
                    </a>
                </div>
              </div>
          )
        })
    } else {
      sitesList = <NoDataMessage datatype={"sites"} />
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
