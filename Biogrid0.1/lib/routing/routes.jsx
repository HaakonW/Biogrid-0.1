privateRoutes = FlowRouter.group({
  name:"privateroutes"
})

publicRoutes = FlowRouter.group({
  name:"publicroutes"
})

publicRoutes.route("/", {
  name: "home",
  action() {
    ReactLayout.render(MainLayout, { content: <Home /> });
  }
});

publicRoutes.route("/logout", {
  name: "logout",
  action() {
    Meteor.logout(() => {
      FlowRouter.redirect("/");
    });
  }
});

privateRoutes.route("/DashboardPage",{
  name:"DashboardPage",
  action:function(){
    ReactLayout.render(DashboardPage,{})
  }
})
