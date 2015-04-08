'use strict';

var productServiceData = '[{"id":"948221187652059927","order":null,"created_at":"2015-03-25 04:13:04","updated_at":"2015-03-25 04:13:14","sku":"5012","title":"Tent","slug":"tent","price":60,"sale_price":0,"status":{"value":"Live","data":{"key":"1","value":"Live"}},"category":{"value":"Outdoors","data":{"944589239574593732":{"id":"944589239574593732","order":null,"created_at":"2015-03-20 03:57:06","updated_at":"2015-03-25 01:44:32","parent":null,"slug":"outdoors","status":{"value":"Live","data":{"key":"1","value":"Live"}},"title":"Outdoors","description":"Outdoor items"}}},"stock_level":400,"stock_status":{"value":"In Stock","data":{"key":"1","value":"In Stock"}},"description":"<p>asdf</p>","requires_shipping":{"value":"Yes","data":{"key":"1","value":"Yes"}},"weight":0,"height":0,"width":0,"depth":0,"catalog_only":{"value":"No","data":{"key":"0","value":"No"}},"tax_band":{"value":"Default","data":}]';


describe('products Service', function() {
  var scope, $httpBackend, $rootScope, productService;

  beforeEach(module('storeApp'));


  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _productService_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    productService = _productService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });

  xit('should return product data after calling products endpoint', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    productService.getList().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
      expect(data).toBe(productServiceData);

    });
  });

  xit('should return category data after calling the products.search endpoint', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    productService.getCategory().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
      expect(data).toBe(productServiceData);

    });
  });
});
