'use strict';



// Clean up stuff that you are not using... get rid of unused stuff.. 
// other than that all of the tests that you have are sufficient..
// setting up some end to end testing
// items added to cart, users work, routes, users


var mockRouteId = '';

describe('products Service', function() {
  var scope, $httpBackend, $rootScope, productService;

  beforeEach(module('storeApp'));
  beforeEach(module('storeApp.mockThirdParty'));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _productService_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    productService = _productService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('functions should exist within productService', function() {
    expect(angular.isFunction(productService.getList)).toBe(true);
    expect(angular.isFunction(productService.getCategory)).toBe(true);
  });






  // Error unexpected request GET views/home.html**********



  it('should return a list of items when calling productService.getList', function() {
    productService.getList().then(function(data) {
      expect(data).toBe(mockProductData);
    });
    $rootScope.$apply();
  });

  it('should return a list of items when calling productService.getList', function() {
    productService.getCategory().then(function(data) {
      expect(data).toBe(mockProductData);
    });
    $rootScope.$apply();
  });

});
