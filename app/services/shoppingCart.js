'use strict';

angular.module('storeApp')
  .factory('shoppingCart', function($q, MoltinAuth) {

    var cartObj = {
       //itemCount : 0,

      addItem : function(itemID) {
        var deferred = $q.defer();
        
        $q.when(MoltinAuth).then(function(moltin) {
          console.log('hello');
          moltin.Cart.Insert(itemID, 1, null, function(cart) {
          console.log(cart);
          console.log(cart.quantity);
          deferred.resolve(cart);
        }, function(error) {
    // Something went wrong...
          });
      });
    }

      //cartItems : function() {
//
      //  var deferred = $q.defer();
//
      //  $q.when(MoltinAuth).then(function(moltin) {
      //    console.log('items');
      //    moltin.Cart.Contents(function(items){
      //      console.log(items);
      //      }, function(error) {
      //         // Something went wrong...
      //    });
      //  });
      //}
  };
    return cartObj;
});