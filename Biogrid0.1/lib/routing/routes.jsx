privateRoutes = FlowRouter.group({
  name:"privateroutes"
});

publicRoutes = FlowRouter.group({
  name:"publicroutes"
});

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

privateRoutes.route("/site",{
  name: "Site",
  action: function(){
    ReactLayout.render(Site,{})
  }
});

privateRoutes.route("/DashboardPage",{
  name:"DashboardPage",
  action:function(){
    ReactLayout.render(DashboardPage,{})
  }
<<<<<<< HEAD
});

// UserAccounts Routes
AccountsTemplates.configureRoute("changePwd");
AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");
AccountsTemplates.configureRoute("signIn");
AccountsTemplates.configureRoute("signUp");
AccountsTemplates.configureRoute("verifyEmail");
=======
})
>>>>>>> useraccounts
