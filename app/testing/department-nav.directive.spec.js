'use strict';

describe('checkout directive', function() {

  var scope,
    compile,
    element,
    html;

  beforeEach(module("storeApp"));

  beforeEach(module('directives/department-nav.html'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = angular.element('<department-nav></department-nav>');
    compile = $compile;
    compile(element)(scope);
    scope.$digest();

  }));

  it('should compile html that matches the template', function() {
    expect(element.hasClass('product-nav')).toBeTruthy();
  });

  it('contains an unordered list', function() {
    expect(element.html()).toContain('<ul>');
  });


});
