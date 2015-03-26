'use strict';

angular.module('storeApp')
  .factory('cartService', function($q, MoltinAuth) {

    var cartObj = {

      loading : false,

      itemList : function () {

        cartObj.loading = true;
       
        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Contents(function(items) {
            deferred.resolve(items);
            cartObj.loading = false;
            console.log(items);
          });
      })
       return deferred.promise;
      },

      addItem : function(itemID) {

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Insert(itemID, 1, null, function(cart) {
          deferred.resolve(cart);
          });
        })
        return deferred.promise;
      },

      contentLoaded : true,

      checkout : function() {

        cartObj.contentLoaded = false;

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Checkout(function(cart) {
          deferred.resolve(cart);
          cartObj.contentLoaded = true;
          console.log(cart);
          });
        })
        return deferred.promise;
      }

    };

    return cartObj;
});