'use strict';

var navSnippet = '<li ng-hide="auth.$getAuth()"><a href="#/register">Register</a></li>';

describe('nav directive', function() {

  var scope,
    compile,
    element,
    html;

  beforeEach(module('storeApp'));
  beforeEach(module('directives/nav.html'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope;
    element = angular.element('<nav navigation></nav>');
    compile = $compile;
    compile(element)(scope);
    scope.$digest();

  }));

  it('should compile html to match the template', function() {
    expect(element.html()).toContain(navSnippet);
  });

  it('should contain 4 list items', function() {
    var listItem = element.find('li');
    expect(listItem.length).toBe(4);
  });
});
