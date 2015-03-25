'use strict';


storeApp.directive('shoppingCart', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/shopping-cart.html',
    replace: true,
    scope: true
  }
});
