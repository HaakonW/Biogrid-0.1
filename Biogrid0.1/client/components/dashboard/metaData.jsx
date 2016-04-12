MetaData = React.createClass({
  render(){
    return(
        <div className="row" id="metaData">
          <div className="col-md-12" >
            <div className="col-md-2 col-xs-5 col-md-offset-2 metaCol" >
              <div className="col-md-12" id="firstMeta">
                <h1 className="countNumber">12</h1>
                <p className="metaText pull-right">Sensors</p>
              </div>
            </div>
            <div className="col-md-2 col-xs-5 metaCol">
              <div className="col-md-12" id="secondMeta">
                <h1 className="countNumber">5</h1>
                <p className="metaText pull-right">Things</p>
              </div>
            </div>
            <div className="col-md-2 col-xs-5 metaCol">
              <div className="col-md-12" id="thirdMeta">
                <h1 className="countNumber">{this.props.countHubs}</h1>
                <p className="metaText pull-right">Hubs</p>
              </div>
            </div>
            <div className="col-md-2 col-xs-5 metaCol">
              <div className="col-md-12" id="forthMeta">
                <h1 className="countNumber">0</h1>
                <p className="metaText pull-right">Unconnected</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
})
