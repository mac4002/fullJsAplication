console.log('Repertoire de base : ' + __dirname);
global.__basedir = __dirname;

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');

const productRouter = require('./routes/product-routeur');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost/fulljs');
let database = mongoose.connection;
database.on('error', (err) => console.log('[Mongoose] : Connexion a MongoDB : echouie'));
database.once('open', () => console.log('[Mongoose] : Connexion a MongoDB : réussie'));


app.use('/api/products', productRouter);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log('[errorHanhdler] Error Detectéé');
  console.log(err);
  res.json('error');
});

module.exports = app;
