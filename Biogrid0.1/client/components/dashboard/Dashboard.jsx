Dashboard = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){

    const siteId = FlowRouter.getParam("siteId");
    const subscriptionHubs = Meteor.subscribe('hubs', siteId);

    return {
      hubsReady: subscriptionHubs.ready(),
      hubs: Hubs.find({siteId:siteId}).fetch(),
      countHubs: Hubs.find({siteId:siteId}).count()
    }
  },

  render(){
    if(this.data.hubsReady) {
      if(this.data.hubs.length === 0) {
        var hubsList = <NoDataMessage datatype={"hubs"}/>
      }
      else {
        var hubsList = this.data.hubs.map(function(hub){
          return(
                <Hub className="hubFrame" key={hub._id} hubId={hub._id} />
          )
        })
      }
    }

    return(
      <div id="bg">
      <Navbar />
      <SubNavbar />
      <MetaData countHubs={this.data.countHubs} />
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            {hubsList}
          </div>
        </div>
      </div>
    )
  }
})
