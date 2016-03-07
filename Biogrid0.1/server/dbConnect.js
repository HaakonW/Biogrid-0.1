if(Meteor.isServer){
  Sensors = new Mongo.Collection('sensors');
  Meteor.publish('sensors',function(){
    return Sensors.find({day:"2016-03-07",type:"rh"});
  });
}
