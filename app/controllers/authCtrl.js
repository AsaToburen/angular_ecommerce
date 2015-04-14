'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', '$location', 'Authentication',

    function($scope, $location, Authentication) {

      $scope.login = function(user) {
        Authentication.login($scope.user);
        $location.path('/products');
      };

      $scope.register = function(user) {
        Authentication.register($scope.user)
          .then(function(user) {
            Authentication.login($scope.user);
            $location.path('/products');
          }).catch(function(error) {
            $scope.message = error.message;
          });
      };

      $scope.toRegister = function() {
        $location.path('/register');
      };

      $scope.toLogin = function() {
        $location.path('/login');
      };

      $scope.toProducts = function() {
        $location.path('/products');
      };
    }
  ]);
