let energySeeds = require('./seeds/energies.json');
let Energy = require('./api/models/energyModel');
var mongoose = require('mongoose');
var EnergyModel = mongoose.model('Energy');
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/D3Datadb');
mongoose.connect('mongodb://heroku_skhwf7mp:7b85vve24lthbklgsu8h0eovsa@ds155411.mlab.com:55411/heroku_skhwf7mp');
mongoose.connect(process.env.MONGODB_URI);

Energy.remove({}, function(err, data) {});

energySeeds.forEach(function(el) {
  let newData = new EnergyModel(el);
  newData.save(function(err, data) {});
})
