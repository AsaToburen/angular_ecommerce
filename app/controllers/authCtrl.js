'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', '$q', '$rootScope', '$firebaseAuth', 'FIREBASE_URL',
    '$location', 'Authentication',
    function($scope, $q, $rootScope, $firebaseAuth,
      FIREBASE_URL, $location, Authentication) {

      $scope.success = Authentication.isLoggedIn();

      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);

      $scope.login = function(user) {
        Authentication.login($scope.user)
          .then(function(user) {
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

    $scope.userProfile = Authentication.getUserProfile();


    $scope.userProfile.$loaded().then(function() {
      console.log($scope.profile);  // "Marie Curie"
      
    });
  
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
