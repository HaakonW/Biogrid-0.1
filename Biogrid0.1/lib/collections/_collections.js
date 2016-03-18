
Sites = new Mongo.Collection('sites');
Hubs = new Mongo.Collection('hubs');
Firmwares = new Mongo.Collection('firmware');
Sensors1 = new Mongo.Collection('sensors1');
Things = new Mongo.Collection('things');
Readings = new Mongo.Collection('readings');

if(Meteor.isServer){
  Sensors = new Mongo.Collection('sensors');
  Meteor.publish('sensors',function(){
    return Sensors.find();
    /*return Sensors.find({day:{
                          $gte: "2016-02-19",
                          $lt: "2016-03-11"
                        }});*/
  });

  //TODO pass userID as argument in function
  Meteor.publish('sites', function(){
    return Sites.find();
  });

  //Publish from Hubs
  Meteor.publish('hubs', function(siteId){
    return Hubs.find({siteId:siteId});
  });

  //Publish from Sensors1
  Meteor.publish('sensors1', function(hubId){
    return Sensors1.find({hubId:hubId});
  });
}
