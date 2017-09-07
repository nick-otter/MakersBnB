var express = require('express');
var router = express.Router();
var Listing = require('../models/listing');

/* GET listings page. */

router.get('/', function(req, res){
  Listing
  .fetchAll()
  .then(function(listings){
    // res.json({ listings });
    res.locals.listings = listings.toJSON();

   res.render('index', { title: 'listings', feature: 'test'})
  //  for (var i = 0; i < listings.length; i++) {
    //  console.log(listings.serialize())
   })
 });

// });


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
     .save()
     .then(res.redirect('/listings'));
     });

router.get('/:id', function(req, res) {
  Listing
    .where('id', req.params.id)
    .fetch()
    .then(function(listing){
    res.locals.listing = listing.toJSON();

    res.render('listing')
  });
});


module.exports = router;
