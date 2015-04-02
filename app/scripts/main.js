'use strict';

angular.module('storeApp', ['storeApp.moltin', 'firebase', 'ngRoute', 'ngAnimate'])
  .run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {

      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  }])

.constant('FIREBASE_URL', 'https://shopangular.firebaseio.com/')
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'DepartmentCtrl',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/products', {
        templateUrl: 'views/store.html',
        controller: 'DepartmentCtrl',
      })
      .when('/products/:id', {
        templateUrl: 'views/store.html',
        controller: 'DepartmentCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'checkoutCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
