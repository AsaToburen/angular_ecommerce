'use strict';

angular.module('storeApp')
  .directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/loginForm.html',
      replace: true,
      scope: true
    };
  });