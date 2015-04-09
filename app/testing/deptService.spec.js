'use strict';

describe('deptService', function() {
  var scope, $rootScope, deptService;

  beforeEach(module('storeApp'));
  beforeEach(module('storeApp.mockThirdParty'));

  beforeEach(inject(function(_$rootScope_, _deptService_) {
    $rootScope = _$rootScope_;
    deptService = _deptService_;
  }));

  it('functions should exist within deptService', function() {
    expect(angular.isFunction(deptService.deptList)).toBe(true);
  });

  it('should return a list of items when calling cartService.itemList', function() {
    deptService.deptList().then(function(data) {
      expect(data).toBe(mockDepartmentData);
    });
    $rootScope.$apply();
  });

});
