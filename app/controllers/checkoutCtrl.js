'use strict';

angular.module('storeApp')
  .controller('checkoutCtrl', ['$scope', 'Authentication', 'cartService',
    function($scope, Authentication, cartService) {

      $scope.auth = Authentication;

      //$scope.auth.$onAuth(function(authData) {
      //  $scope.authData = authData;
      //});

      $scope.checkout = cartService;

      cartService.checkout().then(function(items) {
        $scope.items = items.cart.contents;
        $scope.totals = items.cart.totals.pre_discount.rounded;
      });
    }
  ]);
