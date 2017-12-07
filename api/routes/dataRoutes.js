'use strict';
module.exports = function(app) {
  var dataList = require('../controllers/dataController');
  var industryList = require('../controllers/industryController');

  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.route('/agriculture')
    .get(dataList.list_data)
    .post(dataList.create_data);

  app.route('/agriculture/:key')
    .get(dataList.read_data)

  app.route('/agriculture/:dataId')
    .put(dataList.update_data)
    .delete(dataList.delete_data);

  app.route('/industry')
    .get(industryList.list_industry)
    .post(industryList.create_industry);

  app.route('/industry/:key')
    .get(industryList.read_industry)

  app.route('/industry/:industryId')
    .put(industryList.update_industry)
    .delete(industryList.delete_industry);
};
