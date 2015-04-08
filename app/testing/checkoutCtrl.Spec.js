describe('checkoutCtrl', function() {


  beforeEach(module('storeApp'));

  var ctrl, scope, cartService, $q;

  beforeEach(inject(function($controller, $rootScope, _cartService_, $q) {
    scope = $rootScope.$new();
    cartService = _cartService_;
    $q = $q;
    ctrl = $controller('checkoutCtrl', {
      $scope: scope.$new()
    });
  }));

  xit('checkout controller should exist', function() {
    expect(ctrl).toBeTruthy();

  });

  xit('should attach checkout to cartService', function() {
    expect(scope.checkout).toEqual(cartService);
  });

  xit('should call cartService and return scoped values', function() {     

    expect(cartService.checkout()).not.toBe(null);
    expect(cartService.checkout()).toBeTruthy();

    //Need to test logic for cartservice.checkout()

  });


});
