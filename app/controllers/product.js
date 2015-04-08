'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', ['$scope', 'productService', 'Authentication', 'deptService', 'cartService',
    function($scope, productService, Authentication, deptService, cartService) {

      $scope.auth = Authentication;

      $scope.departments = [];
      $scope.products = [];
      $scope.items = [];

      $scope.firstname = Authentication.userData.firstname;

      $scope.cart = cartService;
      $scope.dept = deptService;

      deptService.deptList().then(function(departments) {
        $scope.departments = departments;
      });

      productService.getList().then(function(products) {
        $scope.products = products;
      });

      productService.getCategory().then(function(products) {
        $scope.products = products;
      });

      cartService.itemList().then(function(items) {
        $scope.items = items;
      });
    }
  ]);
