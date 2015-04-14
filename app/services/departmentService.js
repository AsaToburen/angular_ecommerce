'use strict';

angular.module('storeApp')
  .factory('deptService', ['$q', 'MoltinAuth',
      function($q, MoltinAuth) {

        var deptObj = {

          loading: false,

          deptList: function() {

            deptObj.loading = true;

            var deferred = $q.defer();

            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.List(null, function(departments) {
                deferred.resolve(departments);
                deptObj.loading = false;
              });
            });
            return deferred.promise;
          },
        };
        return deptObj;

      }]);
