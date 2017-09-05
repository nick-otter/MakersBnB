var express = require('express');
var router = express.Router();

/* GET listings page. */

router.get('/', function(req, res, next){
   res.render('listings', { listings: 'listings'});
});


module.exports = router;
