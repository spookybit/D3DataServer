var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Data = require('./api/models/dataModel'), //created model loading here
  bodyParser = require('body-parser');
  password = require('./password');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/D3Datadb');
mongoose.connect(`mongodb://spookybit:${password}@ds155411.mlab.com:55411/heroku_skhwf7mp`)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/dataRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log(password);
console.log('D3Data API server started on: ' + port);
