'use strict';

angular.module('storeApp', ['storeApp.moltin', 'firebase', 'ngRoute', 'ngAnimate', 'ngCookies'])
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
// .run(['$rootScope', '$location', 'Authentication', function ($rootScope, $location, Authentication) {
//   $rootScope.$on('$routeChangeStart', function (event) {

//       if (!Authentication.isLoggedIn()) {
//           console.log('DENY');
//           $location.path('/login');
//       } else if ($location.path() === '/register') {
//           console.log('ALLOW');
//       } else {
//           console.log('ALLOW');
//       }
//   });
//]);


  


