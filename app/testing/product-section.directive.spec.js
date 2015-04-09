'use strict';

var productSnippet = '<section class="product-container">' +
  '<div class="item" ng-repeat="product in products">';


describe('product-section directive', function() {

  var element,
    compile,
    html,
    scope;

  beforeEach(module('storeApp'));
  beforeEach(module('directives/product-section.html'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope;
    element = angular.element('<products></products>');
    compile = $compile;
    compile(element)(scope);
    scope.$digest();
    
  }));


  it('compiled html should contain class product container', function() {

    expect(element.hasClass('product-container')).toBeTruthy();

  });

});
