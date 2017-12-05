'use strict';
module.exports = function(app) {
  var dataList = require('../controllers/dataController');

  app.route('/data')
    .get(dataList.list_data)
    .post(dataList.create_data);


  app.route('/data/:dataId')
    .get(dataList.read_data)
    .put(dataList.update_data)
    .delete(dataList.delete_data);
};
