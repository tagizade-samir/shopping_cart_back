var express = require('express');

var indexRouter = require('./routes/index');
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
