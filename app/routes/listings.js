var express = require('express');
var router = express.Router();
var Listing = require('../models/listing');

/* GET listings page. */

router.get('/', function(req, res, next){
  Listing
  .fetchAll()
  .then(function(listings){
   res.render('index', { title: 'listings', feature: 'listings', list: listings});
 });

});

module.exports = router;
