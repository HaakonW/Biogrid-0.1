Group = React.createClass({

  /*
  This was function before use of collection.
  getMembers(){
    return [
      {_id:1, name: "Peter", skill:"React"},
      {_id:2, name: "Oscar", skill:"Java"},
      {_id:3, name: "Haakon", skill:"CSS"},
    ]
  },

  renderMembers(){
    return this.getMembers().map((member) =>{
      return <Member key={member._id} member={member} />;
    });
  },*/


  /*Add mixin with ReactMeteorData, allow you to use getMeteorData() and access
  collection */
  mixins: [ReactMeteorData],

  getMeteorData(){
    return{
      members: Members.find({}).fetch()
    }
  },

  //render members by using the <Member/> component with props
  renderMembers(){
    return this.data.members.map((member) =>{
      return <Member key={member._id} member={member} />;
    })
  },

  //Render component
  render(){
    return(
      <div className="container">
        <Navbar />
        <MemberForm/>
          <h3> Groupmembers </h3>
            Names from database here:
            {this.renderMembers()}
      </div>
    )
  }
})
