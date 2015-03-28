'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', '$firebaseAuth', 'FIREBASE_URL', 
    '$location', 'Authentication', 
    function($scope, $firebaseAuth, 
      FIREBASE_URL, $location, Authentication) {
     

     var ref = new Firebase(FIREBASE_URL);
     var auth = $firebaseAuth(ref);


    $scope.login = function() {
      Authentication.login($scope.user)
      .then(function(user){
        console.log(user);
        $scope.loginStatus = true;
        $location.path('/products');
        console.log($scope.loginStatus);
      }).catch(function(error){
        $scope.loginStatus = false;
        console.log($scope.loginStatus);
        $scope.message = error.message;
      });
    };

    $scope.register = function() {
      Authentication.register($scope.user)
      .then(function(user) {
        Authentication.login($scope.user);
        $location.path('/products');
      }).catch(function(error) {
        $scope.message = error.message;
      });
   };
   console.log(Authentication.profileRef);
    $scope.toRegister = function(){
      $location.path('/register');
    };

    $scope.toLogin = function(){
      $location.path('/login');
    };

    $scope.toProducts = function(){
      $location.path('/products');
    };

 
   }]);