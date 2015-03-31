'use strict';

angular.module('storeApp')
  .directive('navigation', function() {
    return {
      restrict: 'A',
      templateUrl: 'directives/nav.html',
      replace: true,
      scope: true,
      controller: function($scope, Authentication, $firebaseObject) {
        console.log(Authentication.isLoggedIn());
      $scope.isLoggedIn = Authentication.isLoggedIn();
      $scope.userProfile = Authentication.getUserProfile();
      console.log($scope.userProfile);
      }
    };
  });

/*

angular.module('storeApp')
.filter('getLow', function ($location, $route) {
  console.log($location.path());
  if($location.path() === '/products') {
      
    return function (item) {
      return item.replace(/[^A-Z]/g, '');
    };
  } else {
      return  function (item) {
        item = 'Everything Must Go';
        return item;
      };
    }
});

*/
