// http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WYy1A1EjFPZ


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

// var clientQueries = require('./controllers/queries');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

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

app.listen(port, function() {
  console.log('REIMS Application server running on port: ', port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});


module.exports = app;

// https://translate.google.co.zw/translate?hl=en&sl=id&u=https://furkonblog.wordpress.com/2017/03/19/nodejs-membangun-restfull-api-dengan-framework-express-dan-database-postgres/&prev=search
// https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton
// http://knexjs.org/
// https://coligo.io/templating-node-and-express-apps-with-ejs/
