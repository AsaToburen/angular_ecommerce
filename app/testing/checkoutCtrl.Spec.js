describe('checkoutCtrl', function() {

  beforeEach(module('storeApp'));
  beforeEach(module('storeApp.mockThirdParty'));

  var ctrl, scope, cartService, Authentication, $q, rootScope;

  beforeEach(inject(function($controller, $rootScope, _cartService_, _Authentication_, _$q_) {
    scope = $rootScope.$new();
    cartService = _cartService_;
    Authentication = _Authentication_;
    rootScope = $rootScope;
    $q = _$q_;
    ctrl = $controller('checkoutCtrl', {
      $scope: scope
    });
  }));

  it('checkout controller should exist', function() {
    expect(ctrl).toBeTruthy();
    expect(ctrl).not.toBe(null);
  });

  it('should attach checkout to cartService', function() {
    expect(scope.checkout).toBe(cartService);
  });

  it('should attach checkout to Authentication', function() {
    expect(scope.auth).toBe(Authentication);
  });

  it('should call cartService and return scoped values', function() {
    expect(cartService.checkout()).not.toBe(null);
    expect(cartService.checkout()).toBeTruthy();
  });

  it('should call cartService and return scoped items', function() {
    cartService.checkout().then(function(data) {
      expect(scope.items).toBeTruthy();
      expect(scope.items).not.toBe(null);

      expect(scope.totals).toBeTruthy();
      expect(scope.totals).not.toBe(null);

    });
    rootScope.$apply();
  });

  it('should call cartService and return scoped items', function() {
    cartService.checkout().then(function(data) {

      expect(scope.items).toBe(items.cart.contents);

      expect(scope.totals).toBe(items.cart.totals.pre_discount.rounded);

    });
    rootScope.$apply();
  });








});
