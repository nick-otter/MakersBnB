var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign-up', feature: 'forms/auth_tabs' });
});

router.post('/sign_up', function(req, res) {
new User({
    password: req.body.password,
    email: req.body.email,
  })
    .save(); res.redirect('/listings');
    });

module.exports = router;
