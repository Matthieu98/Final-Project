'use strict';

var mongoose = require('mongoose');

var turnSchema = new mongoose.Schema({
  name: String,
  timestamp: Boolean //Need to change these two things but I'm not sure what. Maybe ask Joey
});

var model = mongoose.model('turns', turnSchema);

module.exports = model;
