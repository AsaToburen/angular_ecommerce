'use strict';

var mockCartData = {
  "contents": [],
  "total_items": 0,
  "total_unique_items": 0,
  "totals": {
    "formatted": {
      "with_tax": "£0.00",
      "without_tax": "£0.00"
    },
    "rounded": {
      "with_tax": 0,
      "without_tax": 0
    },
    "raw": {
      "with_tax": 0,
      "without_tax": 0
    }
  },
  "currency": {
    "id": "944589245429842169",
    "code": "GBP",
    "format": "£{price}",
    "decimal": ".",
    "thousand": ",",
    "rounding": null,
    "exchange": 0
  }
};


describe('Shoppingcart Service', function() {
  var scope, $httpBackend, $rootScope, cartService, $location;

  beforeEach(module('storeApp'));


  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _cartService_, _$location_) {
    $location = _$location_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    cartService = _cartService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });

  xit('should contain cartService', function() {
    expect(cartService).not.toEqual(null);
    expect(cartService).toBeDefined();

  });

  xit('should return a list of items when calling cartService.itemList', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    cartService.itemList().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
      expect(data).toBe(mockCartData);

    });
  });


  xit('should return a list of items when calling cartService.itemList', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    cartService.addItem().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
      expect(data).toBe(mockCartData);

    });
  });


  xit('should return a list of items when calling cartService.itemList', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    cartService.checkout().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
      expect(data).toBe(mockCartData);

    });
  });

  xit('should navigate to the products route', function(){
      cartService.toProducts();
      expect($location.path()).toBe('/products');
  });
});


