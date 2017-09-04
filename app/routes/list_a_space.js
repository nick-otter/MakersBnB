var express = require('express');
var router = express.Router();

router.get('/spaces/new', function(req, res){
  res.render('newspaceform', { title: 'List a Space' });
});

router.post('/spaces', function(req, res) {
  res.render('spacelist'), { title: 'Book a Space'});
});

module.exports = router;
