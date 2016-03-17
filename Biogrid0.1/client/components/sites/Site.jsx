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
          return(
            <div key={site._id}>
              <a href="/dashboardPage"> {site.name} </a>
            </div>
          )
        })
    }

    return(
      <div className="text-center">
        <Navbar />
        <h2>Your sites</h2>
          {sitesList}
      </div>
    )
  }
})
