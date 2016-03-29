Site = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){

    const subscription = Meteor.subscribe('sites');

    return {
      ready: subscription.ready(),
      sites: Sites.find().fetch(),
    }
  },

  render(){

    let sitesList;
    if( this.data.ready) {
          sitesList = this.data.sites.map(function(site){
            let id = site._id;
            let link = "/dashboard/"+id;
          return(
            <div className="row site-row" id="site-row">
              <div className="col-md-12 col-sm-12">
                <div key={site._id}>
                  <h2><a className="site-links" href={link}> {site.name} </a></h2>
                </div>
              </div>
            </div>
          )
        })
    }

    return(
      <div className="text-center">
        <Navbar />
        <h1>Your sites</h1>
        <hr/>
          {sitesList}
      </div>
    )
  }
})
