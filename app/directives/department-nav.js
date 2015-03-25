'use strict';


storeApp.directive('departmentNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/department-nav.html',
    replace: true,
    scope: true,
    controller: function($scope, $location) {
      $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
      };
    }
  };
});