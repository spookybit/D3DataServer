'use strict';

var mongoose = require('mongoose'),
  Energy = mongoose.model('Energy');

exports.list_energy = function(req, res) {
  Energy.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_energy = function(req, res) {
  var new_energy = new Energy(req.body);
  new_energy.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.read_energy = function(req, res) {
  // Energy.findById(req.params.dataId, function(err, data) {
  Energy.find({'key': req.params.key}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_energy = function(req, res) {
  Energy.findOneAndUpdate({_id: req.params.energyId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.delete_energy = function(req, res) {
  Energy.remove({
    _id: req.params.energyId
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: req.params });
  });
};
