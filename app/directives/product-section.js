'use strict';

storeApp.directive('products', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/product-section.html',
    replace: true,
    scope: true
  };
});