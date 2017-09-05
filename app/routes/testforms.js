var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

router.get('/', function(req, res){
   res.render('form');
});

// router.set('view engine', 'pug');
router.set('views', './views');

// for parsing application/json
router.use(bodyParser.json());

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));
form-urlencoded

// for parsing multipart/form-data
router.use(upload.array());
router.use(express.static('public'));

router.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3000);
