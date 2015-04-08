'use strict';

describe('checkout directive', function() {

  var scope,
    compiled,
    element,
    date,
    range,
    html;

  beforeEach(module("storeApp"));
  beforeEach(module("../directives/checkout.html"));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope;

    element = angular.element("<checkout></checkout>");

    compile = $compile;

    compile(element)(scope);

    scope.$digest();

  }));



  //beforeEach(inject(function($rootScope, $compile, $templateCache) {
  //  scope = $rootScope.$new();
  //  element = $compile('<checkout></checkout>')(scope);
  //  template = $templateCache.get('directives/checkoutBox.html');
  //  scope.$digest();
  //}));




  it('should compile html that matches the template', function() {

  });

});
