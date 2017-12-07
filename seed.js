let industrySeeds = require('./seeds/industries.json');
let Industry = require('./api/models/industryModel')
var mongoose = require('mongoose'),
  IndustryModel = mongoose.model('Industry');
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/D3Datadb');
mongoose.connect('mongodb://heroku_skhwf7mp:7b85vve24lthbklgsu8h0eovsa@ds155411.mlab.com:55411/heroku_skhwf7mp');

industrySeeds.forEach(function(el) {
  let newData = new IndustryModel(el);
  console.log(newData);
  newData.save(function(err, data) {
    console.log("this tried to save?")
    if (err)
      console.log(err);
    console.log(data)
  });
})
