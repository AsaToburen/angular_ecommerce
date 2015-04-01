'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', '$cookies', '$cookieStore', '$q', '$rootScope', '$firebaseAuth', 'FIREBASE_URL',
    '$location', 'Authentication',
    function($scope, $cookies, $cookieStore, $q, $rootScope, $firebaseAuth,
      FIREBASE_URL, $location, Authentication) {

      $scope.success = Authentication.isLoggedIn;

      $scope.login = function(user) {
        Authentication.login($scope.user)
          .then(function(user) {
            $location.path('/products');
          }).catch(function(error) {
            $scope.message = error.message;
          });
      };

      $scope.logout = function(user) {
        Authentication.logout($scope.user)
        $scope.digest()
          .then(function(user) {
            $location.path('/login');
          }).catch(function(error) {
            $scope.message = error.message;
          });
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
