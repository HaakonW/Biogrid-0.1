NoDataMessage = React.createClass({
  render(){
    return(
      <div>
        <h2  className="greenText"> Sorry, no {this.props.datatype} available at this time!  </h2>
      </div>
    )
  }
})
