'use strict';

var mockDepartmentData = [{
  "id": "947197683850805779",
  "order": null,
  "created_at": "2015-03-23 18:19:34",
  "updated_at": "2015-03-25 01:44:32",
  "parent": null,
  "slug": "novelties",
  "status": {
    "value": "Live",
    "data": {
      "key": "1",
      "value": "Live"
    }
  },
  "title": "Novelties",
  "description": "<p>Novelty Products</p>",
  "images": []
}, {
  "id": "947197186423128594",
  "order": null,
  "created_at": "2015-03-23 18:18:35",
  "updated_at": "2015-03-25 01:44:32",
  "parent": null,
  "slug": "books",
  "status": {
    "value": "Live",
    "data": {
      "key": "1",
      "value": "Live"
    }
  },
  "title": "Books",
  "description": "<p>Books and reading materials</p>",
  "images": []
}];


describe('products Service', function() {
  var scope, $httpBackend, $rootScope, deptService;

  beforeEach(module('storeApp'));


  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _deptService_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    deptService = _deptService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });

  xit('should return category data after calling the category endpoint', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    deptService.deptList().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
      expect(data).toBe(mockDepartmentData);
    });
  });

  xit('should set loading to false category data after calling the category endpoint', function() {

    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);

    deptService.deptList().then(function(data) {
      $rootScope.$digest();
      $httpBackend.flush();
    });
  });


});
