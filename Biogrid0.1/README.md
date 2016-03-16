## Biogrid - Internet of things, Bachelor thesis 2016

An assignment done in association with [Biogrid.](http://www.biogrid.no)
This is the front end part of the Biogrid [Cortex](https://github.com/BiogridCortex) repo.

#### To run
Needs to be set up with docker and the Biogrid Cortex.

Start with `MONGO_URL=mongodb://192.168.99.100:27017/biogrid meteor`

### Technologies
Web app built in [Meteor](https://www.meteor.com/)  tied together with [react.js](https://facebook.github.io/react/) and Flow-router.

##### Meteor Packages
* react
* kadira:flow-router
* kadira:react-layout
* twbs:bootstrap
* fortawsome:fontawesome
* aldeed:simple-schema

#####Graphs technology
Graphs are made by using the opensource Javascript charting library [dygraphs.](http://dygraphs.com/)
