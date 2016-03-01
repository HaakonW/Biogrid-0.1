Member = React.createClass({

  /* Not necessery, but this component gets the task to display through
  a react prop. We can use propTypes to indicate it is required
  propTypes: {
  member: React.PropTypes.object.isRequired
  },*/

  render(){
    return(
      <li>
        {this.props.member.name} is good at {this.props.member.skill}!
      </li>
    )
  }
})
