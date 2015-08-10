var express = require('express');
var app = express();

// app.use('/', express.static('index.html'));
// app.use(express.static(__dirname, '../../node_modules/angular/angular.js'));

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
});

module.exports = app;