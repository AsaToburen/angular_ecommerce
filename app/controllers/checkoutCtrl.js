'use strict';

angular.module('storeApp')
  .controller('checkoutCtrl', ['$scope', 'cartService', 
   function($scope, cartService) {

      cartService.checkout().then(function(items){
        //$scope.items = items.contents;
        //$scope.totals = items.totals;
        console.log(items);
        console.log(items.cart.contents);

    });

   }]);