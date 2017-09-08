var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign-up', feature: 'forms/auth_tabs' });
});

router.post('/sign_up', function(req, res) {
user = new User({
    password: req.body.password,
    email: req.body.email,
  })
    .save();
    req.session.user = user.dataValues;
    res.redirect('/listings');
    });

module.exports = router;



router.post('/log_in', function(req, res) {
        var email = req.body.email;
        var password = req.body.password;

       user1 = User.where({email: email, password: password}).fetch();
       user1.then(function(user) {
          if(!user) {
               res.redirect('/');
           }
          else {
              req.session.user = user1.dataValues;
              res.redirect('/listings');
           }
         });
       });
