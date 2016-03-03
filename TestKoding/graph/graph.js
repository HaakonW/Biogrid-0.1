MyCollection = new Meteor.Collection('sensors');
//retur = MyCollection.find({ day: '2016-02-12', type: 'rh'}, {"values.13.47":1});
retur = MyCollection.find({ day: '2016-02-12', type: 'rh'}).fetch();
//console.log(retur);


//console.log("HEI "+JSON.stringify(retur));


if (Meteor.isClient) {


}



if (Meteor.isServer) {
  Meteor.startup(function () {
  var startTime = new Date().getMilliseconds();
    //console.log(retur[0]);
    var allValues = retur[0];

    for(var key in allValues){
      if(key == "values")
      for(var i in allValues[key]){ // i = hours
        var hour = i;
          //console.log(i);
          for(var j in allValues[key][i]){ // j = minutes
            var minute = j;
            //console.log(j);
            for(var k in allValues[key][i][j]){
              var second = k;
              var value = allValues[key][i][j][k];
              //console.log("hour:" + hour + "| minute: " + minute + "| second: " + second + "| value: " + value);
            }
          }
      }
    }
    var endTime = new Date().getMilliseconds();
    var usedTime = endTime + startTime;
    console.log("Algorithm takes " + usedTime + " ms." );
    //console.log(allValues);


   });
}
