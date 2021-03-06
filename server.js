var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  // Schema hasn't been registered for model "Energy" error runs if schema isn't initiated in server.js file
  Agriculture = require('./api/models/agricultureModel'), //created model loading here
  Industry = require('./api/models/industryModel'), //created model loading here
  Transportation = require('./api/models/transportationModel'),
  Energy = require('./api/models/energyModel'),
  bodyParser = require('body-parser');

// const aws = require('aws-sdk');
//
// const s3 = new aws.S3({
//   password: process.env.S3_KEY
// });
//
// console.log(s3.password);
  // password = require('./password');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/D3Datadb');
// mongodb://dbuser:dbpass@host:port/dbname
// mongoose.connect(`${MONGODB_URI}`)
// mongoose.connect(`mongodb://spookybit:${s3.password}@ds155411.mlab.com:55411/heroku_skhwf7mp`)

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/D3Datadb');
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/dataRoutes'); //importing route
routes(app); //register the route


app.listen(port);


// console.log('D3Data API server started on: ' + port);
// console.log(process.env.MONGODB_URI);
// console.log('*****************************************')
