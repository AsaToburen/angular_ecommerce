'use strict';


storeApp.directive('navigation', function() {
  return {
    restrict: 'A',
    templateUrl: 'directives/nav.html',
    replace: true,
    scope: true
  };
});