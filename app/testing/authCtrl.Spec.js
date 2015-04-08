describe('auth controller', function() {

  var loginData = {
    email: 'apple@apple.com',
    password: 'apple'
  };


  beforeEach(module('storeApp'));

  var ctrl, scope, $q, Authentication, $location;

  beforeEach(inject(function($controller, $rootScope, $q, $location, Authentication) {
    scope = $rootScope.$new();
    $location = $location;
    $q = $q;
    ctrl = $controller('AuthCtrl', {
      $scope: scope.$new()
    });
  }));

  xit('auth controller should exist', function() {
    expect(ctrl).toBeTruthy();

  });

  //xit('should call Authentication.register', function() {
  //  expect(scope.register(loginData)).toBeTruthy();
  //});

  //xit('should call Authentication.login', function() {     

  // // expect(scope.login).not.toBe(null);
  //  
  //});



  it('should navigate to the appropriate paths', function(scope) {

    //how do you call a function that is scoped to a controller?

    scope.toProducts();
    expect($location.path()).toBe('/products');
  });


});
