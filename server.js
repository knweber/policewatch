// EXPRESS

// require our dependencies
require('dotenv').config()
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// use ejs and express layouts
app.set('view engine', 'html');
app.use(expressLayouts);

// route the app
var router = require('./app/routes');
app.use('/', router);

// set static files (css and images) location
app.use(express.static(__dirname + '/public'));
app.use('/');

// start server
app.listen(port, function() {
  console.log('app started');
});
