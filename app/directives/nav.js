'use strict';

angular.module('storeApp')
  .directive('navigation', function() {
    return {
      restrict: 'A',
      templateUrl: 'directives/nav.html',
      replace: true,
      scope: true,
      controller: ['$scope', 'Authentication', 

      function($scope, Authentication) {

        $scope.firstname = Authentication.userData.firstname;
        $scope.auth = Authentication;

      }]
    };
  });
