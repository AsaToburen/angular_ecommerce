'use strict';

var mockDepartmentData = [{
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


describe('deptService', function() {
  var scope, $httpBackend, $rootScope, deptService;

  beforeEach(module('storeApp'));

  beforeEach(module(function($provide) {
    $provide.value('MoltinAuth', {
      Category: {
        List: function(cb) {
          return cb(mockDepartmentData);
        }
      }
    });
  }));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _deptService_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    deptService = _deptService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('functions should exist within deptService', function() {
    expect(angular.isFunction(deptService.deptList)).toBe(true);
  });

  //it('should return a list of items when calling cartService.itemList', function() {
  //  deptService.deptList().then(function(data) {
  //    expect(data).toBe(mockDepartmentData);
  //  });
  //  $rootScope.$apply();
  //});

});
