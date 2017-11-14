var express = require('express');
var app = express();

app.use((req, res) => {
  res.redirect('https://app.convertkit.com/landing_pages/295771?v=6');
});

module.exports = app;
