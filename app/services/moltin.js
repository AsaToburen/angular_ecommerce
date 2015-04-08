'use strict';

angular.module('storeApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'Z25m8FxwKcw0cAlPQuD9hOrFZquaV0rpv5shgFJS'});
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
      console.log(moltin);
    });
    return deferred.promise;
  });