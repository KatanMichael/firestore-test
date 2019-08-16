var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const fireBase = require('firebase')
const admin = require('firebase-admin')

var app = express();


const firebaseConfig = {
  apiKey: "AIzaSyAYvesXqSkdxBDNZ773rZVbiHlbO4SBHt4",
  authDomain: "simplelogin-6167c.firebaseapp.com",
  databaseURL: "https://simplelogin-6167c.firebaseio.com",
  projectId: "simplelogin-6167c",
  storageBucket: "simplelogin-6167c.appspot.com",
  messagingSenderId: "313303252760",
  appId: "1:313303252760:web:9a99f4022b7d16e7"
};

admin.initializeApp(firebaseConfig)

let db = admin.firestore();


app.get('/addUser', (request, response) =>
{

});

app.get('/addRandomUser', async (request, response) =>
{
  console.log("In Ramdom User Add")

  var firstName = Math.random()*100;
  var age = Math.random()*100;
  return db.collection('users').add(
    {
      "FirstName" : firstName,
      "Age" : age
    }
  );

});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

