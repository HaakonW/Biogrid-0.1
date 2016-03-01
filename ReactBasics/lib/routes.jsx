FlowRouter.route("/",{
  name:"Home",
  action:function(){
    ReactLayout.render(MainLayout,{})
  }
})

FlowRouter.route("/group",{
  name:"Group",
  action:function(){
    ReactLayout.render(Group,{})
  }
})
