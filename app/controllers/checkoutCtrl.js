'use strict';

angular.module('storeApp')
  .controller('checkoutCtrl', ['$scope', 'Auth', 'cartService',
    function($scope, Auth, currentAuth, cartService) {

      $scope.auth = Auth;

      $scope.auth.$onAuth(function(authData) {
        $scope.authData = authData;
      });

      $scope.checkout = cartService;

      cartService.checkout().then(function(items) {
        $scope.items = items.cart.contents;
        $scope.totals = items.cart.totals.pre_discount.rounded;
      });
    }
  ]);
