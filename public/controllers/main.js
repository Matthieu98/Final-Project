'use strict';

angular.module('mainCtrl', [])
  .controller('mainCtrl', function($scope, $http)
  {
    $scope.GetData = function()
    {
      console.log($http.post('/api/turns', {turn: 1}));
    };
  });
