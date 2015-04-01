'use strict';

angular.module('storeApp')
  .directive('navigation', function() {
    return {
      restrict: 'A',
      templateUrl: 'directives/nav.html',
      replace: true,
      scope: true,
      controller: ['$scope', '$location', 'Authentication', 

      function($scope, $location, Authentication) {

        $scope.firstname = Authentication.userData.firstname;
        $scope.isLoggedIn = Authentication.isLoggedIn;
        $scope.auth = Authentication;

      }]
    };
  });
