'use strict';

describe('Authentication Service', function() {
  var scope, $httpBackend, $rootScope, Authentication, $location, $firebase;

  beforeEach(module('storeApp'));
  beforeEach(module('storeApp.mockFirebase'));

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


  it('should contain Authentication', function() {
    expect(Authentication).not.toEqual(null);
    expect(Authentication).toBeDefined();
  });

  it('should contain a function Authentication.login', function() {
    expect(Authentication.login).toBeDefined();
  });
});
