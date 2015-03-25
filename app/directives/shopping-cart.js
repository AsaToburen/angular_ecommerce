'use strict';


angular.module('storeApp')
  .directive('shoppingCart', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/shopping-cart.html',
    replace: true,
    scope: true
  };
});
