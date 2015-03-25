'use strict';

var storeApp = angular.module('storeApp', ['storeApp.moltin', 'ngRoute', 'ngAnimate'])

storeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
      //controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html'
      //controller: 'RegisterCtrl'
    })
    .when('/products', {
      templateUrl: 'views/store.html',
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
        },
        items: function($q, MoltinAuth) {
          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Cart.Contents(function(items) {
              deferred.resolve(items);
              console.log(items);
          });
        })
          return deferred.promise;
        }
      }
    })
    .when('/products/:id', {
      templateUrl: 'views/store.html',
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
        products: function($q, $route, MoltinAuth) {
          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Product.Search({category: $route.current.params.id }, function(products){
                deferred.resolve(products);
            });
        })
          return deferred.promise;
        },
        items: function($q, MoltinAuth) {
          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Cart.Contents(function(items) {
              deferred.resolve(items);
              console.log(items);
          });
        })
          return deferred.promise;
        }
      }
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html'
      //controller: 'CartCtrl'
      //controllerAs: 'CartCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }])
  


