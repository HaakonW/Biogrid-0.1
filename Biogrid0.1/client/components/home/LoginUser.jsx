LoginUser = React.createClass({
//1@1.no - 123456
  handleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    Meteor.loginWithPassword(email, password, function(e){
      if(e) {
        console.log("Reason: " + e.reason);
      }
      else{
        FlowRouter.go("/site");
      }
    });
  },

    render(){
    return(
      <div>
      <form role="form">
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" ref="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" ref="password" placeholder="Password"/>
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Login</button>
      </form>
      </div>
    )
     }



});
