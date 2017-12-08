let transportationSeeds = require('./seeds/transportations.json');
let Transportation = require('./api/models/transportationModel');
var mongoose = require('mongoose');
var TransportationModel = mongoose.model('Transportation');
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/D3Datadb');
// mongoose.connect('mongodb://heroku_skhwf7mp:7b85vve24lthbklgsu8h0eovsa@ds155411.mlab.com:55411/heroku_skhwf7mp');
mongoose.connect(process.env.MONGODB_URI);

Transportation.remove({}, function(err, data) {});

transportationSeeds.forEach(function(el) {
  let newData = new TransportationModel(el);
  newData.save(function(err, data) {});
})
