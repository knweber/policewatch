// require express
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

// export router
module.exports = router;

// route for homepage
router.get('/', function(req,res) {
  res.render('pages/index');
});

router.get('/resources', function(req,res) {
  res.render('pages/resources');
});

// route for about page
router.get('/about', function(req,res) {
  res.render('pages/about');
});
