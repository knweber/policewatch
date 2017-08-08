// EXPRESS

// require our dependencies
var express = require('express');
var app = express();
var port = 8080;

// route the app
var router = require('./app/routes');
app.use('/', router);

// set static files (css and images)

// start server
app.listen(port, function() {
  console.log('app started');
});
