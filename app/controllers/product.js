'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', function($scope, shoppingCart, products, items, departments) {
    $scope.departments = departments;
    $scope.products = products;
    $scope.cart = shoppingCart;
    $scope.items = items;
    //$scope.currentProducts = currentProducts;
    console.log(shoppingCart);
    console.log(departments);
    console.log(products);
    console.log(items);
    //console.log(currentProducts);

  });
