Dashboard = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){

    const siteId = FlowRouter.getParam("siteId");
    const subscriptionHubs = Meteor.subscribe('hubs', siteId);

    return {
      hubsReady: subscriptionHubs.ready(),
      hubs: Hubs.find({siteId:siteId}).fetch(),
    }
  },

  render(){
    if(this.data.hubsReady) {
      var hubsList = this.data.hubs.map(function(hub){
        return(
              <Hub key={hub._id} hubId={hub._id} />
        )
      })
    }

    return(
      <div id="bg">
      <Navbar />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <Metadata />
          </div>
          <div className="col-md-10">
            {hubsList}
          </div>
        </div>
      </div>
    )
  }
})
