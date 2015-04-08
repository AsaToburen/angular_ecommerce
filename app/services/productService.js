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
            deferred.resolve(products);
            console.log(products);
            productObj.loadingList = false;
          });
        });
        return deferred.promise;
      },

      getCategory: function() {

        productObj.loadingCategory = true;
        
        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Product.Search({
            category: $route.current.params.id
          }, function(products) {
            deferred.resolve(products);
            console.log(products);
            productObj.loadingCategory = false;
          });
        });
        return deferred.promise;
      }
    };
    return productObj;

  });
