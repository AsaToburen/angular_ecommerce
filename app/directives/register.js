'use strict';

angular.module('storeApp')
  .directive('register', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/register.html',
    replace: true,
    scope: true
  };
});