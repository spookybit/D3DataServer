'use strict';

var mongoose = require('mongoose'),
  Agriculture = mongoose.model('Agriculture');

exports.list_data = function(req, res) {
  Agriculture.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_data = function(req, res) {
  var new_data = new Agriculture(req.body);
  new_data.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.read_data = function(req, res) {
  // Agriculture.findById(req.params.dataId, function(err, data) {
  Agriculture.find({'key': req.params.key}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_data = function(req, res) {
  Agriculture.findOneAndUpdate({_id: req.params.dataId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.delete_data = function(req, res) {
  Agriculture.remove({
    _id: req.params.dataId
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Data successfully deleted' });
  });
};
