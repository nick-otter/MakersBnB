var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var feature = 'forms/auth_tabs'
  res.render('index', { title: 'Express', feature: feature });
});



module.exports = router;
