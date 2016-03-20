privateRoutes = FlowRouter.group({
  name:"privateroutes",
  triggersEnter:[function (context,redirect) {
    //let route;
    if(!Meteor.userId()) {
      alert("You dont have access!");
      redirect("/");
    }
  }]
});

publicRoutes = FlowRouter.group({
  name:"publicroutes",
});

publicRoutes.route("/", {
  name: "Home",
  action() {
    ReactLayout.render(Home, { content: <Home /> })
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

privateRoutes.route("/dashboard/:siteId" ,{
  name:"Dashboard",
  action:function(){
    ReactLayout.render(Dashboard,{})
  }
}
);

//TODO Make not found component
FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      ReactLayout.render(PageNotFound,{}),
      Meteor.setTimeout(function(){
         FlowRouter.go("/");
      }, 3000);
    }
};
