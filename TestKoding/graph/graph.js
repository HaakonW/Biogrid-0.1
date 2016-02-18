MyCollection = new Meteor.Collection('sensors');

if (Meteor.isClient) {
  console.log("Client:" + MyCollection.findOne());


  //db = connect("<192.168.99.100><:27017>/<biogrid>");
  //var x = new Mongo('192.168.99.100[:27017]');
  //var mydb = x.getDB('biogrid');

  //var conn = new Mongo("<192.168.99.100>:<27017>");
  //db = conn.getDB("biogrid");
  //cursor = db.sensors.find();

  // counter starts at 0
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    //console.log("Server:" + MyCollection.findOne());
    //console.log("server:" + MyCollection.find({type: "rh", sensor_id: "81772309-6FFF-4886-9977-DA15AD34C263"}));
    console.log(MyCollection.find({type: "rh", sensor_id: '81772309-6FFF-4886-9977-DA15AD34C263', day: '2016-02-05'}));

    //process.env.MONGO_URL = "mongodb://192.162.99.100:27017/biogrid";
    // code to run on server at startup
  });
}
