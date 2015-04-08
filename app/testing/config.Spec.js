'use strict';


describe('testing routes', function() {

  beforeEach(module('storeApp'));

  it('should assign appropriate ctrl and template',
    inject(function ($route) {

      expect($route.routes['/'].controller).toBe('DepartmentCtrl');
      expect($route.routes['/'].templateUrl).toEqual('views/home.html');

      
      expect($route.routes['/products'].controller).toBe('DepartmentCtrl');
      expect($route.routes['/products/:id'].templateUrl).toEqual('views/store.html');


      expect($route.routes['/products/:id'].controller).toBe('DepartmentCtrl');
      expect($route.routes['/products/:id'].templateUrl).toEqual('views/store.html');

      expect($route.routes['/login'].controller).toBe('AuthCtrl');
      expect($route.routes['/login'].templateUrl).toEqual('views/login.html');
      

      expect($route.routes['/register'].controller).toBe('AuthCtrl');
      expect($route.routes['/register'].templateUrl).toEqual('views/register.html');

      expect($route.routes['/checkout'].controller).toBe('checkoutCtrl');
      expect($route.routes['/checkout'].templateUrl).toEqual('views/checkout.html');

      expect($route.routes[null].redirectTo).toEqual('/');
    }));
});