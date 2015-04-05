'use strict';

angular.module('storeApp', [ 'ngRoute', 'ngAnimate', 'storeApp.moltin', 'firebase'])
  .run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {

      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  }]).constant('FIREBASE_URL', 'https://shopangular.firebaseio.com/');