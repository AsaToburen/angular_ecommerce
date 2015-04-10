'use strict';

// setting up some end to end testing
// items added to cart, users work, routes, users

describe('products Service', function() {
  var scope, $httpBackend, $rootScope, productService;

  beforeEach(module('storeApp'));
  beforeEach(module('storeApp.mockThirdParty'));
  beforeEach(module('views/home.html'));

  beforeEach(inject(function( _$rootScope_, _productService_) {
    $rootScope = _$rootScope_;
    productService = _productService_;
  }));

  it('functions should exist within productService', function() {
    expect(angular.isFunction(productService.getList)).toBe(true);
    expect(angular.isFunction(productService.getCategory)).toBe(true);
  });

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
