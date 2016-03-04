LocationPage = React.createClass({

links:[
  {_id:1, href:'/dashboardPage',text:'Oslo', icon:'fa fa-home'},
  {_id:2, href:'/#',text:'Trondheim' ,icon:'fa fa-reddit-alien'},
  {_id:3, href:'/#',text:"Bergen", icon:'fa fa-shopping-basket'},
],

  render(){

    let rows = this.links.map(function(link){
      return(
        <div key={link._id}>
          <a href={link.href}> <i className={link.icon}></i>  {link.text} </a>
        </div>
      )
    });

    return(
      <div className="jumbotron text-center">
          <div className="row">
              {rows}
          </div>
      </div>
    )
  }
})
