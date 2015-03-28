'use strict';

angular.module('storeApp')
  .controller('checkoutCtrl', ['$scope', 'cartService', 
   function($scope, cartService) {

    $scope.checkout = cartService;

      cartService.checkout().then(function(items){
        console.log(items.cart.contents);

        $scope.items = items.cart.contents;
        $scope.totals = items.cart.totals.pre_discount.rounded;

        

    });

   }]);