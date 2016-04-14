privateRoutes = FlowRouter.group({
  name:"privateroutes",
  triggersEnter:[function (context,redirect) {
    if(!Meteor.userId()) {
      redirect("/");
    }
  }]
});

publicRoutes = FlowRouter.group({
  name:"publicroutes",
});

publicRoutes.route("/", {
  name: "Login",
  action() {
    { Meteor.userId() ? FlowRouter.redirect("/site") : ReactLayout.render(Loginlayout, {}) }
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

privateRoutes.route("/site", {
  name: "Site",
  action: function() {
    ReactLayout.render(Site, {});
  }
});

privateRoutes.route("/dashboard/:siteId", {
  name:"Dashboard",
  action:function() {
    ReactLayout.render(Dashboard, {})
  }
});

FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(PageNotFound, {}),
    Meteor.setTimeout(function() {
      FlowRouter.go("/site");
    }, 6000);
  }
};
