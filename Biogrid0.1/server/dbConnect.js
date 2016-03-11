if(Meteor.isServer){
  Sensors = new Mongo.Collection('sensors');

  Meteor.publish('sensors',function(){
    return Sensors.find();
    /*return Sensors.find({day:{
                          $gte: "2016-02-19",
                          $lt: "2016-03-11"
                        }});*/
  });
}
