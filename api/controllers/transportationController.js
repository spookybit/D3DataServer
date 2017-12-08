'use strict';

var mongoose = require('mongoose'),
  Transportation = mongoose.model('Transportation');

exports.list_transportation = function(req, res) {
  Transportation.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_transportation = function(req, res) {
  var new_transportation = new Transportation(req.body);
  new_transportation.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.read_transportation = function(req, res) {
  // Transportation.findById(req.params.dataId, function(err, data) {
  Transportation.find({'key': req.params.key}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_transportation = function(req, res) {
  Transportation.findOneAndUpdate({_id: req.params.transportationId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.delete_transportation = function(req, res) {
  Transportation.remove({
    _id: req.params.transportationId
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: req.params });
  });
};
