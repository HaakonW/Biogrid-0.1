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
            <div key={site._id} className="row site-row" id="site-row">
              <div className="col-md-12 col-sm-12">
                <div>
                  <h2><a className="site-links" href={link}> {site.name} </a> </h2>
                    <Map lat={site.latitude} lng={site.longitude} />
                </div>
              </div>
            </div>
          )
        })
    } else {
      sitesList = <div className="blueText"> Sorry, no sites available or loading </div>
    }

    return(
      <div className="text-center">
        <Navbar />
        <div>
            {sitesList}
        </div>
      </div>
    )
  }
})
