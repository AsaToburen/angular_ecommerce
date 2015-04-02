'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', 
   'FIREBASE_URL', '$location', 'Authentication',

    function($scope, FIREBASE_URL, $location, Authentication) {


      var ref = new Firebase(FIREBASE_URL);

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
