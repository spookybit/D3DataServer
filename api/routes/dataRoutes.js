'use strict';
module.exports = function(app) {
  var agricultureList = require('../controllers/agricultureController');
  var industryList = require('../controllers/industryController');

  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.route('/agriculture')
    .get(agricultureList.list_data)
    .post(agricultureList.create_data);

  app.route('/agriculture/:key')
    .get(agricultureList.read_data)

  app.route('/agriculture/:dataId')
    .put(agricultureList.update_data)
    .delete(agricultureList.delete_data);

  app.route('/industry')
    .get(industryList.list_industry)
    .post(industryList.create_industry);

  app.route('/industry/:key')
    .get(industryList.read_industry)

  app.route('/industry/:industryId')
    .put(industryList.update_industry)
    .delete(industryList.delete_industry);
};
