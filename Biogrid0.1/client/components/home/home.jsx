Home = React.createClass({
  mixins:[ReactMeteorData],

  getMeteorData(){
    return {
       user : Meteor.userId(),
    }
  },

  render() {
    return(
      <div>
        <NavBar />
        <Content />
      </div>
    )
  }
});
