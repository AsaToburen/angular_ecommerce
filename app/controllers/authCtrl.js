'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', '$q', '$rootScope', '$firebaseAuth', 'FIREBASE_URL',
    '$location', 'Authentication',
    function($scope, $q, $rootScope, $firebaseAuth,
      FIREBASE_URL, $location, Authentication) {

      $scope.success = Authentication.isLoggedIn();


      $scope.login = function(user) {
        Authentication.login($scope.user)
          .then(function(user) {
            Authentication.getUserProfile(user.uid);
            $location.path('/products');
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
