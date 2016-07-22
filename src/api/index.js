'use strict';

var express = require('express');
var Turn = require('../models/turns.js')
// var turns = require('../../mock/turns.json');

var router = express.Router();

router.post('/turns', function(req, res){
  var turn = req.body;
  console.log(turn);
  Turn.create(turn, function(err, turn){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({'turn': turn, message: 'Turn counted'});
  })
});
router.get('/turns', function(req, res){
  res.send("success");
});
module.exports = router;
