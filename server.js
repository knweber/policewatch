// EXPRESS

// require our dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// route the app
var router = require('./app/routes');
app.use('/', router);

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// set static files (css and images) location
app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
  console.log('app started');
});
