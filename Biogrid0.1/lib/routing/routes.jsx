privateRoutes = FlowRouter.group({
  name:"privateroutes"
})

publicRoutes = FlowRouter.group({
  name:"publicroutes"
})


publicRoutes.route("/",{
  name:"Login",
  action:function(){
    ReactLayout.render(Login,{})
  }
})

privateRoutes.route("/site",{
  name:"Site",
  action:function(){
    ReactLayout.render(Site,{})
  }
})

privateRoutes.route("/DashboardPage",{
  name:"DashboardPage",
  action:function(){
    ReactLayout.render(DashboardPage,{})
  }
})

/*Route to Login-page
FlowRouter.route("/",{
  name:"Login",
  action:function(){
    ReactLayout.render(Login,{})
  }
})

FlowRouter.route("/locationPage",{
  name:"LocationPage",
  action:function(){
    ReactLayout.render(LocationPage,{})
  }
})

FlowRouter.route("/dashboardPage",{
  name:"DashboardPage",
  action:function(){
    ReactLayout.render(DashboardPage,{})
  }
})*/
