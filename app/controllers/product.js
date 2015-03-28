'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', ['$scope', '$q', 'productService', 'deptService', 'cartService',
   function($scope, $q, productService, deptService, cartService) {
   
     $scope.departments = [];
     $scope.products = [];
     $scope.items = [];
     $scope.heading = 'Everything Must Go';

     

     $scope.cart = cartService;
     $scope.dept = deptService;

     deptService.deptList().then(function(departments){
         $scope.departments = departments;
    });

    productService.getList().then(function(products){
        $scope.products = products;
    });

    productService.getCategory().then(function(products){
        $scope.products = products;
    });

    cartService.itemList().then(function(items){
        $scope.items = items;
    });

    

    

  }]);
