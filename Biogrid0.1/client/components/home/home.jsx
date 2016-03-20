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
        <Navbar />
        <Content />
      </div>
    )
  }
});
