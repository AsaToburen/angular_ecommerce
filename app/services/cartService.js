'use strict';

angular.module('storeApp')
  .factory('cartService', function($q, MoltinAuth) {

    var cartObj = {
     // loading : false,

      addItem : function(itemID) {

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Insert(itemID, 1, null, function(cart) {
          deferred.resolve(cart);
          });
        })
        return deferred.promise;
      },

      itemList : function () {
       
       var deferred = $q.defer();
       $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Contents(function(items) {
            deferred.resolve(items);
          });
       })
       return deferred.promise;
      },
    };

    return cartObj;
});