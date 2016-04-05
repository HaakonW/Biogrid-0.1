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
              <Hub className="hubFrame" key={hub._id} hubId={hub._id} />
        )
      })
    }

    return(
      <div id="bg">
      <Navbar />
      <SubNavbar />
        <div className="row">

          <div className="col-md-10">
            {hubsList}
          </div>
        </div>
      </div>
    )
  }
})
