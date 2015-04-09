'use strict';


var checkoutSnippet = '<h1>Shopping Cart</h1>'
'<i ng-show="!checkout.contentLoaded" class="spinner spinner--large spinner--dark"></i>'
'<section class="ng-hide" ng-show="checkout.contentLoaded">';

describe('checkout directive', function() {

  var scope,
    compile,
    element,
    html;

  beforeEach(module("storeApp"));
  beforeEach(module("directives/checkoutBox.html"));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope;
    element = angular.element('<checkout></checkout>');
    compile = $compile;
    compile(element)(scope);
    scope.$digest();

  }));

  it('should compile html that matches the template', function() {
    expect(element.html()).toContain(checkoutSnippet);
  });

  it('should contain two tables', function() {
    var table = element.find('table');
    expect(table.length).toBe(2);
  });
});
