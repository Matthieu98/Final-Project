'use strict';

var mongoose = require('mongoose');

var turnSchema = new mongoose.Schema({
  name: String,
  timestamp: Number
});

var model = mongoose.model('turns', turnSchema);

//mongoose.connect('mongodb://localhost/myapp');

module.exports = model;
