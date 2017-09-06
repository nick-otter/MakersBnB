var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var listings = require('./routes/listings');

var app = express();

var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('postgresql'); //type = 'mongodb|redis|couchdb'

// databaseCleaner.clean(database, callback); (to be used before/after tests)

// bookshelf config
// var dbConfig = {
//   client: 'postgres',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: 'your_password',
//     database: 'blog',
//     charset: 'utf8'
//   }
// };
//
// var knex = require('knex')(dbConfig);
// var bookshelf = require('bookshelf')(knex);
// 
// app.set('bookshelf', bookshelf);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);
app.use('/listings', listings);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
if (!module.parent) {
  http.createServer(app).listen(process.env.PORT, function(){
    console.log("Server listening on port " + app.get('port'));
  });
}
