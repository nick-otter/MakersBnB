var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Makers Bnb', feature: 'forms/auth_tabs' });
});



module.exports = router;
