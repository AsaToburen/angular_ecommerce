'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', 
   'FIREBASE_URL', '$location', '$anchorScroll', 'Authentication',

    function($scope, FIREBASE_URL, $location, $anchorScroll, Authentication) {


      var ref = new Firebase(FIREBASE_URL);

      $scope.login = function() {
        $scope.authData = null;
        $scope.error = null;

        ref.authWithPassword({
          email: $scope.user.email,
          password: $scope.user.password,
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            $location.path('/products');
            console.log("Authenticated successfully with payload:", authData);
          }
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
        $location.hash('title');
        $anchorScroll();
      };
    }
  ]);
