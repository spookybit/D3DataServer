let dataSeeds = require('./data.json');
var Schema = mongoose.Schema;
var mongoose = require('mongoose'),
  Agric = mongoose.model('Data');

dataSeeds.forEach(function(el) {
  let newData = new Agric(el);
  newData.save(function(err) {console.log(err)})
})
