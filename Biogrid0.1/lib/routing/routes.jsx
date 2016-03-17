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

FlowRpublicRoutes.route("/logout", {
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

// UserAccounts Routes
AccountsTemplates.configureRoute("changePwd");
AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");
AccountsTemplates.configureRoute("signIn");
AccountsTemplates.configureRoute("signUp");
AccountsTemplates.configureRoute("verifyEmail");
