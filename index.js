var cookieSession = require('cookie-session');
var express = require('express');

var app = express();

app.set('trust proxy', 1); // trust first proxy

app.use(cookieSession({
  name: 'user',
  signed: false,
  maxAge: 7000
}));

app.use(function (req, res, next) {
  // Update views

  req.session.views = (req.session.views || 0) + 1;
  // req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge;

  // Write response
  res.end(req.session.views + ' views');
});

app.listen(3000)
