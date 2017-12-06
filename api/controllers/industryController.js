'use strict';

var mongoose = require('mongoose'),
  Industry = mongoose.model('Industry');

exports.list_industry = function(req, res) {
  Industry.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_industry = function(req, res) {
  var new_industry = new Industry(req.body);
  new_industry.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.read_industry = function(req, res) {
  // Industry.findById(req.params.dataId, function(err, data) {
  Industry.find({'key': req.params.key}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_industry = function(req, res) {
  Industry.findOneAndUpdate({_id: req.params.industryId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.delete_industry = function(req, res) {
  Industry.remove({
    _id: req.params.industryId
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: req.params });
  });
};
