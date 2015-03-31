'use strict';

angular.module('storeApp')
  .directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/login.html',
    replace: true,
    scope: true
  };
});