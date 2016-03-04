MyCollection = new Meteor.Collection('sensors');
//retur = MyCollection.find({ day: '2016-02-12', type: 'rh'}, {"values.13.47":1});
retur = MyCollection.find({ day: '2016-02-12', type: 'rh'}).fetch();
<<<<<<< HEAD
//console.log(retur);


//console.log("HEI "+JSON.stringify(retur));


if (Meteor.isClient) {


=======

if (Meteor.isClient) {
>>>>>>> origin/master
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  var startTime = new Date().getMilliseconds();
<<<<<<< HEAD
    //console.log(retur[0]);
    var allValues = retur[0];

=======
  var graphString = "";
    //console.log(retur[0]);
    var allValues = retur[0];
    var day = allValues.day;
>>>>>>> origin/master
    for(var key in allValues){
      if(key == "values")
      for(var i in allValues[key]){ // i = hours
        var hour = i;
          //console.log(i);
          for(var j in allValues[key][i]){ // j = minutes
            var minute = j;
            //console.log(j);
<<<<<<< HEAD
            for(var k in allValues[key][i][j]){
              var second = k;
              var value = allValues[key][i][j][k];
              //console.log("hour:" + hour + "| minute: " + minute + "| second: " + second + "| value: " + value);
=======
            for(var k in allValues[key][i][j]){ // k = seconds
              var second = k;
              var value = allValues[key][i][j][k];
              //console.log("hour:" + hour + "| minute: " + minute + "| second: " + second + "| value: " + value);
              graphString += day + "," + hour + "-" + minute + "-" + second + "," + value + "\n";
>>>>>>> origin/master
            }
          }
      }
    }
    var endTime = new Date().getMilliseconds();
    var usedTime = endTime + startTime;
<<<<<<< HEAD
    console.log("Algorithm takes " + usedTime + " ms." );
    //console.log(allValues);


=======
    //console.log(graphString);
    console.log("Algorithm takes " + usedTime + " ms." );
>>>>>>> origin/master
   });
}
