'use strict';

var mongoose = require('mongoose');

var turnSchema = new mongoose.Schema({
  name: String,
  completed: Boolean //Need to change these two things but I'm not sure what. Maybe ask Joey
});

var model = mongoose.model('Turns', turnSchema);

module.exports = model;