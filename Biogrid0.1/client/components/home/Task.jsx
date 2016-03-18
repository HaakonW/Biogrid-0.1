navBar = React.createClass({
  mixins: [ReactMeteorData],

  checkLoginStatus(){
    console.log(Meteor.user());
  },

  render(){
    
  }

});
