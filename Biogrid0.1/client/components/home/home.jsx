Home = React.createClass({
  mixins:[ReactMeteorData],

  getMeteorData(){
    return {
       user : Meteor.userId(),
    }
  },

  render() {
    return(
      <div >
          <h1>BioGrid Cortex</h1>

          <h3>AccountsUIWrapper</h3>

          <AccountsUIWrapper />
          <h3>{this.data.user}</h3>

      </div>
    )
  }
});
