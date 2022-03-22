var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var cities = require('./routes/cities');
app.use('/cities', cities);

app.get('/user/:id', function (req, res, next) {
  // if user id is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // else pass the control to the next middleware in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for /user/:id which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special');
});

module.exports = app;
