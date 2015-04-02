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

        $scope.auth = Authentication.auth;
        $scope.logout = Authentication.logout;

      }]
    };
  });
