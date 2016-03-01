MemberForm = React.createClass({

  //Function for adding new member
  submitMember(e){
    //Add explanation later
    e.preventDefault();

    let memberName = ReactDOM.findDOMNode(this.refs.inputName).value;
    let memberSkill = ReactDOM.findDOMNode(this.refs.inputSkill).value;

    //Insert into Members collection
    Members.insert({
      name:memberName,
      skill:memberSkill,
    });

    ReactDOM.findDOMNode(this.refs.inputName).value ="";
    ReactDOM.findDOMNode(this.refs.inputSkill).value ="";
  }

  //Function which renders the component
  ,render(){
    return(
      <div>
        <form onSubmit={this.submitMember}>
          <div className="form-group">
            <label>Firstname</label>
              <input
                className="form-control"
                type="text"
                ref="inputName"
                placeholder="Firstname new member"/>
          </div>
          <div className="form-group">
            <label>Skill</label>
            <input
              className="form-control"
              type="text"
              ref="inputSkill"
              placeholder="Skill new member"/>
          </div >
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
})
