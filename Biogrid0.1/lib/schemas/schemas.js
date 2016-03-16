// The schema is based on the Parent links pattern since it seems most suitable
// for the document support in Meteor.

// todo: add indexes as necessary

var Schemas = {}

Schemas.Site = new SimpleSchema({
  // todo: add client
  name: { type: String, max: 200 },
})
Sites.attachSchema(Schemas.Site)

Schemas.Hub = new SimpleSchema({
  hardware: { type: String, max: 200, optional: true },
  hardware: { type: String, max: 200, optional: true },
  uuid: { type: String, label: 'UUID', regEx: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i },
  siteId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
  firmwareId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
})
Hubs.attachSchema(Schemas.Hub)

Schemas.Sensor = new SimpleSchema({
  sensorType: { type: String, max: 200 },
  // todo: validation of graph properties
  graph: { type: Object, optional: true },
  uuid: { type: String, label: 'UUID', regEx: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i },
  thingId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
  hubId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
})
Sensors1.attachSchema(Schemas.Sensor)

Schemas.Reading = new SimpleSchema({
  day: { type: String, min: 10, max: 10 },
  values: { type: Object, optional: true },
  sensorId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true }
})
Readings.attachSchema(Schemas.Reading)

Schemas.Firmware = new SimpleSchema({
  name: { type: String, max: 200 },
  version: { type: String, max: 200 },
  files: { type: [Object] }
})
Firmwares.attachSchema(Schemas.Firmware)
