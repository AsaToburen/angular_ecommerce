'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', ['$scope', '$q', 'productService', 'deptService', 'cartService',
   function($scope, $q, productService, deptService, cartService, products, items, departments) {
   

     //items = cartService.items;
     //products = productService.products;
    
     $scope.products = [];
     $scope.departments = [];
     $scope.items = [];


    deptService.deptList().$promise.then(function(departments){
         $scope.departments = departments;
    });

    productService.getList().$promise.then(function(products){
        $scope.products = products;
    });

    productService.getCategory().$promise.then(function(products){
        $scope.products = products;
    });

    cartService.itemList().$promise.then(function(items){
        $scope.items = items;
    });

    

    

  }]);
