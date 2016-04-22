MetaData = React.createClass({
  render() {
    return(
      <div className="row" id="metaData">
        <div className="col-md-12" >
          <div className="col-md-2 col-md-offset-2 col-xs-3 col-xs-offset-0 metaCol" >
            <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1" id="firstMeta">
              <h2 className="countNumber">12</h2>
              <p className="metaText pull-left">Sensors</p>
            </div>
          </div>
          <div className="col-md-2 col-xs-3 metaCol">
            <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1" id="secondMeta">
              <h2 className="countNumber">5</h2>
              <p className="metaText pull-left">Things</p>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-0 col-xs-3 col-xs-offset-0 metaCol">
            <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1" id="thirdMeta">
              <h2 className="countNumber">{this.props.countHubs}</h2>
              <p className="metaText pull-left">Hubs</p>
            </div>
          </div>
          <div className="col-md-2 col-xs-3 metaCol">
            <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1" id="forthMeta">
              <h2 className="countNumber">12°</h2>
              <p className="metaText pull-left">Celsius</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
