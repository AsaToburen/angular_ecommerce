'use strict';

angular.module('storeApp')
  .directive('checkout', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/checkoutBox.html',
    replace: true,
    scope: true
  };
});