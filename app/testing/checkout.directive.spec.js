'use strict';

var strVar="";
strVar += "<div class=\"cart-container\">";
strVar += "  <h1>Shopping Cart<\/h1>";
strVar += "  <i ng-show=\"!checkout.contentLoaded\" class=\"spinner spinner--large spinner--dark\"><\/i>";
strVar += "  <section ng-show=\"checkout.contentLoaded\">";
strVar += "    <table>";
strVar += "       <tr class=\"head\">";
strVar += "       <th><\/th>";
strVar += "       <th><\/th>";
strVar += "        <th class=\"head-text\">Quantity<\/th>";
strVar += "        <th class=\"head-price\">Price<\/th>";
strVar += "      <\/tr>";
strVar += "      <tr ng-repeat=\"item in items\">";
strVar += "        <td><img ng-src=\"{{item.images[0].url.http}}\" width=\"95px\" height=\"110px\" alt=\"{{item.title}}\"><\/td>";
strVar += "        <td>{{item.title}}<\/td>";
strVar += "        <td class=\"quant\">{{item.quantity}}<\/td>";
strVar += "        <td class=\"item-total\">{{item.total_before_tax | currency}}<\/td>";
strVar += "      <\/tr>";
strVar += "    <\/table>";
strVar += "    <table class=\"totals\">";
strVar += "      <tr>";
strVar += "        <td>Subtotal<\/td>";
strVar += "        <td>{{totals.without_tax | currency}}<\/td>";
strVar += "      <\/tr>";
strVar += "       <tr>";
strVar += "        <td>Total<\/td>";
strVar += "        <td>{{totals.with_tax | currency}}<\/td>";
strVar += "      <\/tr>";
strVar += "    <\/table>";
strVar += "    <button>Checkout<\/button>";
strVar += "    <button ng-click=\"checkout.toProducts()\">Continue Shopping<\/button>";
strVar += "  <\/section>";
strVar += "<\/div>";


describe('checkout directive', function() {

  var scope,
    compile,
    element,
    date,
    range,
    html;

  beforeEach(module("storeApp"));
  beforeEach(module("checkoutBox.html"));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope;

    element = angular.element("<checkout></checkout>");

    compile = $compile;

    compile(element)(scope);

    scope.$digest();

  }));

  //NEED TO GET PASSING


  xit('should compile html that matches the template', function() {
      expect(element.html()).toBe(strVar);

  });
});
