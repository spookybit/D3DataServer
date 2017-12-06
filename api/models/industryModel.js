'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IndustrySchema = new Schema({
  key: {
    type: String
  },
  gasType: String,
  metricValue: String,
  productOf: String,
  emissionsByYear: {
    type: Object
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Industry', IndustrySchema);
