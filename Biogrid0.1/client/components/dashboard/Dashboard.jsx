Dashboard = React.createClass({
  /*mixins: [ReactMeteorData],
  getMeteorData(){
    //TODO
    //1.Get data from matching siteId and hubId
    //2.Publish from hubs with siteId. That gives _id
    //3.Publish from sensors1 with hubId. That should give thingId og _id
    //4. Publish from things with thingId. That gives description
    //5. Publish from reading whith sensorId. That gives day and values
    return
  },*/
  render(){
    return(
      <div id="bg">
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
          </div>
        </div>
      </div>
    )
  }
})
