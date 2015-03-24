'use strict';

angular.module('storeApp', ['storeApp.moltin', 'ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
      //controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/products', {
      templateUrl: 'views/products.html',
      controller: 'DepartmentCtrl',
      resolve: {
        departments: function($q, MoltinAuth){
          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Category.List(null, function(departments){
              deferred.resolve(departments);
            });
          })
          return deferred.promise;
        },
        products: function($q, MoltinAuth){
          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Product.List(null, function(products){
              deferred.resolve(products);
            });
          })
          return deferred.promise;
        }
      }
    })
    .when('/shoppingcart', {
      templateUrl: 'views/shopping.html'
      //controller: 'CartCtrl'
      //controllerAs: 'CartCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }])
  .directive('navigation', function() {
  return {
    restrict: 'A',
    templateUrl: 'views/nav.html',
    replace: true,
    scope: true
  };
});