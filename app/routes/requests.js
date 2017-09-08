var express = require('express');
var router = express.Router();
var Request = require('../models/request');


/* GET listings page. */

router.get('/', function(req, res){
 Request.where({id: listinguserid })
  .fetchAll()
  .then(function(requests){
    res.locals.requests = requests.toJSON();

   res.render('index', { title: 'requests', feature: 'test' })
});

});

router.get('/new', function(req, res){
   res.render('index', { title: 'new_listing', feature: './forms/newlisting'});
 });

 router.post('/', function(req, res) {
 new Request({
     name: req.body.name,
     description: req.body.description,
     price: req.body.price,
     startDate: req.body.startDate,
     endDate: req.body.endDate,
   })
     .save()
     .then(res.redirect('/listings'));
   });

   module.exports = router;
