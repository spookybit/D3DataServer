let dataSeeds = require('./seeds/datas.json');
let Data = require('./api/models/dataModel');
var mongoose = require('mongoose');
var DataModel = mongoose.model('Data');
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/D3Datadb');
mongoose.connect('mongodb://heroku_skhwf7mp:7b85vve24lthbklgsu8h0eovsa@ds155411.mlab.com:55411/heroku_skhwf7mp');

Data.remove({}, function(err, data) {});

dataSeeds.forEach(function(el) {
  let newData = new DataModel(el);
  newData.save(function(err, data) {});
})
