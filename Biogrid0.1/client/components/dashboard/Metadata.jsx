Metadata = React.createClass({
  render(){
    return(
      <div className="panel panel-default vertical-center">
        <div className="panel-heading">
          <h3 className="panel-title" data-toggle="collapse" href="#sideMenu">Menu<i className="fa fa-bars fa-pull-right"></i></h3>
        </div>
        <div className="list-group" id="sideMenu">
          <a className="list-group-item">Locations<i className="fa fa-map-marker fa-lg fa-pull-right"/></a>
          <a className="list-group-item">Sensors<i className="fa fa-bolt fa-lg fa-pull-right"/></a>
          <a className="list-group-item">Settings<i className="fa fa-cog fa-lg fa-pull-right"/></a>
        </div>
      </div>
    )
  }
})
