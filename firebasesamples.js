/* AUTH TEST */

"use strict";
describe('Auth', function() {
  beforeEach(function() {
    module('mock.firebase');
    module('firebase.auth');
  });

  it('should return $firebaseAuth instance', function() {
    inject(function (Auth, $firebaseAuth) {
      var ref = new MockFirebase();
      var testInst = $firebaseAuth(ref);
      expect(Auth.prototype === testInst.prototype).toBe(true);
    });
  });
});


/* Login Controller Test */

describe('myApp.login', function() {
  beforeEach(function() {
    module('myApp');
    module('myApp.login');
  });

  describe('LoginCtrl', function() {
    var loginCtrl, $scope;
    beforeEach(function() {
      inject(function($controller) {
        $scope = {};
        loginCtrl = $controller('LoginCtrl', {$scope: $scope});
      });
    });

    it('should define login function', function() {
      expect(typeof $scope.login).toBe('function');
    });

    it('should define createAccount function', function() {
      expect(typeof $scope.createAccount).toBe('function');
    });
  });
});

/* Main Tests */


MockFirebase.prototype.orderByKey = function() { return this; };
MockFirebase.prototype.orderByPriority = function() { return this; };
MockFirebase.prototype.orderByValue = function() { return this; };
MockFirebase.prototype.orderByChild = function() { return this; };
MockFirebase.prototype.limitToLast = function() { return this; };
MockFirebase.prototype.limitToFirst = function() { return this; };
MockFirebase.prototype.startAt = function() { return this; };
MockFirebase.prototype.endAt = function() { return this; };

angular.module('mock.firebase', [])
  .run(function($window) {
    $window.Firebase = $window.MockFirebase;
  })
  .factory('Firebase', function($window) {
    return $window.MockFirebase;
  });







