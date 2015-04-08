describe('auth controller', function() {

var user = {"email":"apple@apple.com","password":"apple"};
var registerData = {"firstname":"James","lastname":"Apple","email":"japple@apple.com","password":"apple"};

  beforeEach(module('storeApp'));

  var ctrl, scope, Authentication, $q, rootScope, location;

  beforeEach(inject(function($controller, $rootScope, $location, _Authentication_, _$q_) {
    scope = $rootScope.$new();
    location = $location;
    Authentication = _Authentication_;
    rootScope = $rootScope;
    $q = _$q_;
    ctrl = $controller('AuthCtrl', {
      $scope: scope
    });
  }));


  xit('auth controller should exist', function() {
    expect(ctrl).toBeTruthy();
    expect(ctrl).not.toBe(null);
  });

  xit('scoped routing functions should exist and navigate to appropriate path', function() {
    scope.toRegister();
    expect(location.path()).toBe('/register');
    scope.toLogin();
    expect(location.path()).toBe('/login');
    scope.toProducts();
    expect(location.path()).toBe('/products');
  });


 // it('should call Authentication.register', function() {
 //   scope.login(user);
 //   //expect(Authentication.login()).toHaveBeenCalled();
//
 //   //expect(location.path().toBe('/products'));
 //   
//
 //  // expect(scope.register(userLogin)).toBeTruthy();
 // });

  xit('should call Authentication.login', function() {

    expect(scope.login).not.toBe(null);
    expect(scope.login).toBeTruthy();

    expect(scope.register).not.toBe(null);
    expect(scope.register).toBeTruthy();

  });
});




