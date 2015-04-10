'use strict';

var user = {
  "email": "apple@apple.com",
  "password": "apple"
};
var registerData = {
  "firstname": "James",
  "lastname": "Apple",
  "email": "japple@apple.com",
  "password": "apple"
};

var mockAuthData = {
  "provider": "password",
  "uid": "simplelogin:55",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InByb3ZpZGVyIjoicGFzc3dvcmQiLCJ1aWQiOiJzaW1wbGVsb2dpbjo1NSJ9LCJpYXQiOjE0Mjg0MjkyODV9.GSxiwVDJe6M6QAF23WZTQ69rpxOGnuvhL8qRMcdfQ2g",
  "password": {
    "email": "apple@apple.com",
    "isTemporaryPassword": false
  },
  "auth": {
    "provider": "password",
    "uid": "simplelogin:55"
  },
  "expires": 1428515685
};


var MockFirebase = function() {};

MockFirebase.prototype.orderByKey = function() { return this; };
MockFirebase.prototype.orderByPriority = function() { return this; };
MockFirebase.prototype.orderByValue = function() { return this; };
MockFirebase.prototype.orderByChild = function() { return this; };
MockFirebase.prototype.limitToLast = function() { return this; };
MockFirebase.prototype.limitToFirst = function() { return this; };
MockFirebase.prototype.startAt = function() { return this; };
MockFirebase.prototype.endAt = function() { return this; };

angular.module('storeApp.mockFirebase', [])
  .run(function($window) {
    $window.Firebase = $window.MockFirebase;
  })
  .factory('Firebase', function($window) {
    return $window.MockFirebase;
  });
