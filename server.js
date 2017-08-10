// EXPRESS

// require our dependencies
require('dotenv').config()
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// route the app
var router = require('./app/routes');
app.use('/', router);

// set static files (css and images) location
app.use(express.static(__dirname + '/public'));

// start server
app.listen(process.env.PORT || 8080, function() {
  console.log('app started');
});
