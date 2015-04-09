'use strict';

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

var user = {
  email: "apple@apple.com",
  password: "apple"
};

describe('Authentication Service', function() {
  var scope, $httpBackend, $rootScope, Authentication, $location;

  beforeEach(module('storeApp'));

  beforeEach(module(function($provide) {
  $provide.value('MoltinAuth', {
    Cart: {
      Contents: function(cb) { return cb(mockCartData); }
    }
  });
}));


  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _Authentication_, _$location_, _$firebase_) {
    $firebase = _$firebase_;
    $location = _$location_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    Authentication = _Authentication_;
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });


  xit('should contain Authentication', function() {
    expect(Authentication).not.toEqual(null);
    expect(Authentication).toBeDefined();

  });

  it('should log a user in when calling Authentication.login', function() {

    //Authentication.login(user).then(function(data) {
//
    //  $rootScope.$digest();
    //  $httpBackend.flush();
    //  expect(data).toBe(mockAuthData);

    });
  });
});
