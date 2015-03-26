'use strict';

angular.module('storeApp')
  .directive('navigation', function() {
  return {
    restrict: 'A',
    templateUrl: 'directives/nav.html',
    replace: true,
    scope: true
  };
});


angular.module('storeApp')
.filter('getLow', function ($location) {
  console.log($location.path());
  if($location.path() === '#/products') {
    
    return function (item) {
      return item.replace(/[^A-Z]/g, '');
    };
  } else {

      return  function (item) {
        return item;
      };
    }
});