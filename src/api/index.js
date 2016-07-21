'use strict';

var express = require('express');
var Turn = require('../models/turns.js')
//var turns = require('../../mock/turns.json');

var router = express.Router();

// router.post('/turns', function(req, res){
//   Turn.create({timestamp: true, name: pOneTurn})
// });
router.post('/turns', function(req, res){
  var turn = req.body;
  res.send(turn);
})

module.exports = router;
