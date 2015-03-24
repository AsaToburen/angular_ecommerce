'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', function($scope, products, departments) {
    $scope.departments = departments;
    $scope.products = products;
    console.log(departments);
    console.log(products);
  });
 //.controller('ProductCtrl', function($scope, products) {
 //  //$scope.departments = departments;
 //  $scope.products = products;
 //  
 //  console.log(products);
 //});