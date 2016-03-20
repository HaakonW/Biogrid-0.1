Dashboard = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){

    const siteId = FlowRouter.getParam("siteId");
    console.log("siteId:", siteId);
    const data = {};

    //TODO
    //1.Get data from matching siteId and hubId
    const subscriptionHubs = Meteor.subscribe('hubs', siteId);
    //const subscriptionSensors1 = Meteor.subscribe('sensors1', hubId);
    //2.Publish from hubs with siteId. That gives _id
    //3.Publish from sensors1 with hubId. That should give thingId og _id
    //4. Publish from things with thingId. That gives description
    //5. Publish from reading whith sensorId. That gives day and values

    return{
      hubsReady: subscriptionHubs.ready(),
      hubs: Hubs.find().fetch(),
      //sensors1: Sensors1.find().fetch(),
    }
  },

  findHubIds(){
    let hubIdArray = [];
    if(this.data.hubsReady) {
      let hubs = this.data.hubs.map(function(hub){
        hubIdArray.push(hub._id);
      })
    }
    return hubIdArray;
  },

  componentDidUpdate(){
    console.log("THIS IS HUBIDARRAY: ",this.findHubIds());
  },

  render(){
    if(this.data.hubsReady) {
      var hubsList = this.findHubIds().map(function(hubId){
        return(
            <Hub key={hubId} hubId={hubId} />
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
          <div className="col-md-5 col-sm-12">
            <ParentGraph />
          </div>
          <div className="col-md-5 col-sm-12">
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-2">
            {hubsList}
          </div>
        </div>
      </div>
    )
  }
})
