var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use(cors()); // enable CORS for all origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.listen(port, function() {
  console.log('REIMS Application server running on port: ', port);
});


module.exports = app;