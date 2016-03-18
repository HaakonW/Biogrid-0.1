privateRoutes = FlowRouter.group({
  name:"privateroutes"
});

publicRoutes = FlowRouter.group({
  name:"publicroutes"
});

publicRoutes.route("/", {
  name: "Home",
  action() {
    ReactLayout.render(Home, { content: <Home /> });
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

privateRoutes.route("/site",{
  name: "Site",
  action: function(){
    ReactLayout.render(Site,{});
  }
});

privateRoutes.route("/Dashboard",{
  name:"Dashboard",
  action:function(){
    ReactLayout.render(Dashboard,{})
  }
}
);
