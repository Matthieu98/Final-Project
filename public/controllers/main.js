'use strict';

angular.module('Chess_Timer_App')
  .controller('mainCtrl',function($scope, dataService){
    dataService.getTurns(function(response){
      var turns = response.data.turns;
      $scope.turns= turns;
    });
  })
