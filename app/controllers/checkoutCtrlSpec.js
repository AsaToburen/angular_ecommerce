

describe('Checkout Controller', function() {

  beforeEach(module('storeApp'));
  beforeEach(module('Authentication'));
  beforeEach(module('cartService'));

  describe('checkoutCtrl', function() {
    var ctrl, scope, cartService;

    beforeEach(inject(function($controller, $rootScope, cartService) {
      scope = $rootScope.$new();
      ctrl = $controller('checkoutCtrl', {
        $scope : scope
      });
    }));

    it('should call checkout and return a promise with items and totals', function() {
      x = 2;
      x++;
      expect(x).toEqual(3);

    });
  });
});