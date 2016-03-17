//Sites = new Mongo.Collection('sites')
//Hubs = new Mongo.Collection('hubs')
//Firmwares = new Mongo.Collection('firmware')
//Sensors1 = new Mongo.Collection('sensors1')
//Things = new Mongo.Collection('things')
//Readings = new Mongo.Collection('readings')

/*if (Sites.find().count() === 0) {
  console.log("Seeding database...")

  try {
    // firmware
    var luaGatewayId = Firmwares.insert({
      name: 'LUA Gateway',
      architecture: 'NodeMCU',
      version: '0.9.1',
      files: [{
        name: 'init.lua',
        content: 'uart.setup(0, 115200, 8, 0, 1, 1)'
      }]
    })

    // sites
    var greenSenseId = Sites.insert({name: 'Green Sense Oslo'})
    var holyCowId = Sites.insert({name: 'Holy Cow Breeding Farm Oslo'})

    // hubs
    hubOneId = Hubs.insert({
      hardware: 'ESP8266',
      firmwareId: luaGatewayId,
      siteId: greenSenseId,
      uuid: 'D1707F4B-9E29-48C0-9A98-5C6E40FDAA7A',
    })

    hubTwoId = Hubs.insert({
      hardware: 'ESP8266',
      firmwareId: luaGatewayId,
      siteId: greenSenseId,
      uuid: '04FF1140-6108-45F8-A0F4-88B05DF4C1C4',
    })

    hubThreeId = Hubs.insert({
      hardware: 'ESP8266',
      firmwareId: luaGatewayId,
      siteId: holyCowId,
      uuid: '1F40FBB4-9715-4D65-8DB2-A7C330A07C86',
    })

    // things that the Sensors1 are monitoring
    basilId = Things.insert({description: 'Basil leaf zone'})
    nutrientsId = Things.insert({description: 'Nutrient solution'})
    cow1Id = Things.insert({description: 'Cow named Kargo'})
    cow2Id = Things.insert({description: 'Cow named Blitz'})
    cow3Id = Things.insert({description: 'Cow named Duke'})

    // Sensors1

    var phId = Sensors1.insert({
      sensorType: 'pH sensor probe',
      graph: {graphType: 'ph'},
      uuid: '39000A7F-1847-4464-B3BC-F57FF0DF0F2E',
      hubId: hubOneId,
      thingId: nutrientsId})

    var ecId = Sensors1.insert({
      sensorType: 'EC sensor probe',
      graph: {graphType: 'sme'},
      uuid: '0EE043A0-DA83-43F1-AFF9-C08762F60F43',
      hubId: hubOneId,
      thingId: nutrientsId})

    var rhId = Sensors1.insert({
      sensorType: 'RH sensor',
      graph: {graphType: 'percentage'},
      uuid: 'E84D553D-C18E-4402-92A7-B3B56921F4DF',
      hubId: hubTwoId,
      thingId: basilId})

    var cowMotion1Id = Sensors1.insert({
      sensorType: 'Cow activity detector',
      graph: {graphType: 'percentage'},
      uuid: '4F04F9F1-9392-46E3-B570-2A992663D67A',
      hubId: hubThreeId,
      thingId: cow1Id})

    var cowMotion2Id = Sensors1.insert({
      sensorType: 'Cow activity detector',
      graph: {graphType: 'percentage'},
      uuid: 'D13B4889-7DE0-4E4E-AE79-248141209EA5',
      hubId: hubThreeId,
      thingId: cow2Id})

    var cowMotion3Id = Sensors1.insert({
      sensorType: 'Cow activity detector',
      graph: {graphType: 'percentage'},
      uuid: 'FF47E9D3-BD17-447D-8E1C-EA6DB61D53A3',
      hubId: hubThreeId,
      thingId: cow3Id})

    var tempId = Sensors1.insert({
      sensorType: 'Temperature sensor',
      graph: {graphType: 'celcius'},
      uuid: '553F4632-70A1-4BAB-A7DD-014CA91D9B03',
      hubId: hubThreeId,
      thingId: cow1Id})

    Readings.insert({
      day: '2016-02-09',
      sensorId: ecId,
      values: {
        '11': {
          '0': {
            '1': 100,
            '2': 101
          }
        }
      }
    })
  }
  catch (err) {
    console.error("Seeding error. Please drop the database and try again: " + err.message)
  }
}
else {
  console.log("Using existing database")
}
*/
