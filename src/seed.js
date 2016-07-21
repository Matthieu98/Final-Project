// 'use strict';
//
// var Turn = require('./models/turns.js');
//
// var turns = [
//   'Player 1s turn',
//   'Player 2s turn',
//   'Player 1s turn'
// ]
//
// turns.forEach(function(turn, index){
//   Turn.find({'name': turn}, function(err, turns){
//     if(!err && !turns.length){
//       Turn.create({timestamp: true, name: turn});
//     };
//   });
// });
