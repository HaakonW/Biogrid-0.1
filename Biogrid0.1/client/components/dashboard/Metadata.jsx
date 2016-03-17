Metadata = React.createClass({
  handleClick: function(event){
    //console.log("trykket på", event.target.id);
    if(event.target.id === "weekBtn"){

    }
  },

  render(){
    return(
      <div className="panel panel-default vertical-center">
        <div className="panel-heading">
          <h3 className="panel-title" data-toggle="collapse" href="#sideMenu">Menu<i className="fa fa-bars fa-fw fa-pull-right"></i></h3>
        </div>
        <div className="list-group" id="sideMenu">
          <div className="list-group-item">Locations<i className="fa fa-map-marker fa-lg fa-fw fa-pull-right"/></div>
          <div className="list-group-item">Sensors<i className="fa fa-bolt fa-lg fa-fw fa-pull-right"/></div>
          <div className="list-group-item">Settings<i className="fa fa-cog fa-lg fa-fw fa-pull-right"/>
            <div className="list-group" id="settingsMenu">
              <div className="btn-group btn-group-sm" role="group">
                <button id="dayBtn" type="button" className="btn btn-default" onClick={this.handleClick}>Day</button>
                <button id="weekBtn" type="button" className="btn btn-default" onClick={this.handleClick}>Week</button>
                <button id="monthBtn" type="button" className="btn btn-default" onClick={this.handleClick}>Month</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
