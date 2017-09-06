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


router.get('/new', function(req, res){
   res.render('index', { title: 'new_listing', feature: './forms/newlisting'});
 });

 router.post('/', function(req, res) {
 new Listing({
     name: req.body.name,
     description: req.body.description,
     price: req.body.price,
     startDate: req.body.startDate,
     endDate: req.body.endDate,
   })
     .save(); res.redirect('/listings');
     });



module.exports = router;
