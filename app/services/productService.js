'use strict';

angular.module('storeApp')
  .factory('productService', function($q, $route, MoltinAuth) {

    var productObj = {

      loadingList: false,
      loadingCategory: true,

      getList: function() {

        productObj.loadingList = true;

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Product.List(null, function(products) {
            console.log(JSON.stringify(products));
            deferred.resolve(products);
            console.log(JSON.stringify(products));
            productObj.loadingList = false;
          });
        });
        return deferred.promise;
      },

      getCategory: function() {

        productObj.loadingCategory = true;

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          console.log($route.current.params.id);
          moltin.Product.Search({
            category: $route.current.params.id
          }, function(products) {
            deferred.resolve(products);
            console.log(JSON.stringify(products));
            productObj.loadingCategory = false;
          });
        });
        return deferred.promise;
      }
    };
    return productObj;

  });
