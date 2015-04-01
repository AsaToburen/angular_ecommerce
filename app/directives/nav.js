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
        console.log(Authentication.userData);
        $scope.userData = Authentication.userData;
      $scope.isLoggedIn = Authentication.isLoggedIn();
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
