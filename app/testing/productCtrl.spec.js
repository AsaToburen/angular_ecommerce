describe('auth controller', function() {

  beforeEach(module('storeApp'));

  var ctrl, scope, Authentication, cartService, deptService, productService, $q, rootScope, location;

  beforeEach(inject(function($controller, $rootScope, $location, _cartService_, _productService_, _deptService_, _Authentication_, _$q_) {
    scope = $rootScope.$new();
    location = $location;
    Authentication = _Authentication_;
    cartService = _cartService_;
    productService = _productService_;
    deptService = _deptService_;
    rootScope = $rootScope;
    $q = _$q_;
    ctrl = $controller('DepartmentCtrl', {
      $scope: scope
    });
  }));


  it('dept controller should exist', function() {
    expect(ctrl).toBeTruthy();
    expect(ctrl).not.toBe(null);
  });

  it('scope assigned to appropriate items', function() {
    expect(scope.auth).toBe(Authentication);
    expect(scope.firstname).toBe(Authentication.userData.firstname);
    expect(scope.cart).toBe(cartService);
    expect(scope.dept).toBe(deptService);
  });


it('should call cartService and return scoped items', function() {
  cartService.itemList().then(function(items) {
    expect(scope.items).toBe(items);
  });
  rootScope.$apply();
});
//
  //it('should call productService and return scoped products', function() {
  //  productService.getList().then(function(products) {
  //    expect(scope.products).toBe(products);
  //  });
  //  rootScope.$apply();
  //});
//
  //it('should call deptService and return scoped departments', function() {
  //  deptService.deptList().then(function(departments) {
  //    expect(scope.departments).toBe(departments);
  //  });
  //  rootScope.$apply();
  //});
//
  //it('should call productService.getCategory and return scoped products', function() {
  //  productService.getCategory().then(function(products) {
  //    expect(scope.products).toBe(products);
  //  });
  //  rootScope.$apply();
  //});






});
