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
      templateUrl: 'views/register.html'
      //controller: 'RegisterCtrl'
    })
    .when('/products', {
      templateUrl: 'views/store.html',
      controller: 'DepartmentCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'views/store.html',
      controller: 'DepartmentCtrl'
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'checkoutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);


  


