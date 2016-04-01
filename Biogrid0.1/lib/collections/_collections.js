
Sites = new Mongo.Collection('sites');
Hubs = new Mongo.Collection('hubs');
Firmwares = new Mongo.Collection('firmware');
Sensors1 = new Mongo.Collection('sensors1');
Things = new Mongo.Collection('things');
Readings = new Mongo.Collection('readings');

if(Meteor.isServer){
  /*Sensors = new Mongo.Collection('sensors');
  Meteor.publish('sensors',function(){
    return Sensors.find({day:"2016-03-10"});
    /*return Sensors.find({day:{
                          $gte: "2016-02-19",
                          $lt: "2016-03-11"
                        }});
  });*/

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

  //Publish from Things
  Meteor.publish('things', function(thingId){
    return Things.find({_id:thingId});
  });

  //Publish from Readings
  Meteor.publish('readings', function(sensorId){
    return Readings.find({sensorId:sensorId});
  });
}
