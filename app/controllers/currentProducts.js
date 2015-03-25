'use strict';

angular.module('storeApp')
  .controller('CurrentProducts', function($scope, currentProducts) {
    $scope.products = products;
    //$scope.departments = departments;
    //console.log(departments);
    console.log(products);
  });