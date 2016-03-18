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
            <div key={site._id}>
              <a href={link}> {site.name} </a>
            </div>
          )
        })
    }

    //Navbar is replaced by Nav. Nav in lib/components/home/nav
      if(true) {
        return(
          <div className="text-center">
            <h2>Your sites</h2>
              {sitesList}
          </div>
        )
      } else {
        return(
          <div>
            dashboard
          </div>
        )
      }
  }
})
