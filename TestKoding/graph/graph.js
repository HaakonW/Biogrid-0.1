MyCollection = new Meteor.Collection('sensors');

if (Meteor.isClient) {
  //console.log("Client:" + MyCollection.findOne());


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
    //console.log(MyCollection.find({type: "rh", sensor_id: '81772309-6FFF-4886-9977-DA15AD34C263', day: '2016-02-05'}));
    //console.log("Server" + MyCollection.find());
    var retur = MyCollection.find({ day: '2016-02-12', type: 'rh'});
    var tmpDay, tmpValue, tmp;
    retur.forEach(function(tmp){
      if(retur === null)console.log("retur er null");
      tmpDay = tmp.day;
      console.log("Dagen i dag: " + tmpDay);

      tmpValue = tmp.values;


      var hour = findHour(tmpValue);
      console.log("Hour: " + hour); //13
      tmpValue = tmpValue[hour];

      var minute = findHour(tmpValue);
      console.log("Minute: " + minute); //47
      tmpValue = tmpValue[minute];

      var second = findHour(tmpValue);
      console.log("Value: " + tmpValue[second]);
      /*var testtemp = findHour(tmpValue);
      console.log(testtemp);*/


      //var valueDick = findHour(tmpValue);
      //tmpValue = tmp.values[second];


      /*tmpValue = tmpValue[47];
      tmpValue = tmpValue[8];
      console.log(tmpValue);
      //console.log(tmpValue);*/
  });

function findHour(obj){
  for(var tmp in obj)

    return tmp;
}



    //process.env.MONGO_URL = "mongodb://192.162.99.100:27017/biogrid";
    // code to run on server at startup
  });
}
