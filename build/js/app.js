'use strict';

angular.module('storeApp', ['storeApp.moltin', 'firebase', 'ngRoute', 'ngAnimate'])
  .constant('FIREBASE_URL', 'https://shopangular.firebaseio.com/')
  .config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'DepartmentCtrl',
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AuthCtrl'
    })
    .when('/products', {
      templateUrl: 'views/store.html',
      controller: 'DepartmentCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'views/store.html',
      controller: 'DepartmentCtrl'
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'checkoutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);


  



'use strict';

angular.module('storeApp')
  .factory('Authentication', ['$firebase', '$q', '$firebaseObject', '$firebaseAuth',
      '$location', 'FIREBASE_URL',

      function($firebase, $q, $firebaseObject, $firebaseAuth,
        $location, FIREBASE_URL) {

        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);

        var myObject = {

          ref : new Firebase(FIREBASE_URL),
          authData: {},
          userData: {},

          isLoggedIn: function() {
            return angular.isDefined(myObject.userData.uid);
          },

          login: function(user) {
            var deferred = $q.defer();
            auth.$authWithPassword({
              email: user.email,
              password: user.password
            }).then(function(authData) {
              deferred.resolve(authData);
              myObject.userData = authData;
              myObject.uid = authData.uid;
            var userRef = new Firebase(FIREBASE_URL + 'users/' + authData.uid);

        ref.on('value', function(userProfile) {
            myObject.userData = userProfile.val().users;
            deferred.resolve(myObject.userData);
          });
        });
      return deferred.promise;
    },

    getUserProfile: function(userId) {
      var userRef = new Firebase(FIREBASE_URL + 'users/' + userId);
      var profileRef = userRef.child(userId);
       return $firebaseObject(profileRef);

    },

    register: function(user) {
      return auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function(regUser) {

        var profileRef = new Firebase(FIREBASE_URL + 'users/' + regUser.uid);

        profileRef.set({

          date: Firebase.ServerValue.TIMESTAMP,
          regUser: regUser.uid,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email

        }, function(error) {
          if (error) {
            console.log("Error:", error);
          } else {
            myObject.isLoggedIn();
            console.log("Profile set successfully!");
          }
        });
      });
    }
  };
return myObject;

}]);

'use strict';

angular.module('storeApp')
  .factory('cartService', function($q, $location, MoltinAuth) {

    var cartObj = {

      loading : false,

      itemList : function () {

        cartObj.loading = true;
       
        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Contents(function(items) {
            deferred.resolve(items);
            cartObj.loading = false;
          });
      })
       return deferred.promise;
      },

      addItem : function(itemID) {

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Insert(itemID, 1, null, function(cart) {
          deferred.resolve(cart);
          });
        })
        return deferred.promise;
      },

      contentLoaded : true,

      checkout : function() {

        cartObj.contentLoaded = false;

        var deferred = $q.defer();
        $q.when(MoltinAuth).then(function(moltin) {
          moltin.Cart.Checkout(function(cart) {
          deferred.resolve(cart);
          cartObj.contentLoaded = true;
          
          });
        })
        return deferred.promise;
      },

      toProducts : function() {

        $location.path('/products');

      }

    };

    return cartObj;
});
'use strict';

angular.module('storeApp')
  .factory('deptService', function($q, MoltinAuth) {

    var deptObj = {

       loading : false,
      
      deptList: function() {

          deptObj.loading = true;

          var deferred = $q.defer();

          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Category.List(null, function(departments){
              deferred.resolve(departments);
               deptObj.loading = false;
            });
          });
          return deferred.promise;
        },
    };
    return deptObj;
    
  });
'use strict';

angular.module('storeApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'Z25m8FxwKcw0cAlPQuD9hOrFZquaV0rpv5shgFJS'});
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
    });
    return deferred.promise;
  });
'use strict';

angular.module('storeApp')
  .factory('productService', function($q, $route, MoltinAuth) {
   
    var productObj = {
      
      loadingList : false,
      loadingCategory : true,

      getList: function(){
        
      productObj.loadingList = true;
        
        var deferred = $q.defer();
         $q.when(MoltinAuth).then(function(moltin) {
            moltin.Product.List(null, function(products){
              deferred.resolve(products);
              productObj.loadingList = false;
            });
          });
          return deferred.promise;
      },

      getCategory: function() {

        productObj.loadingCategory = true;

          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Product.Search({category: $route.current.params.id }, function(products){
                deferred.resolve(products);
                productObj.loadingCategory = false;
            });
          });
          return deferred.promise;
      }
    };

  return productObj;

});
'use strict';

angular.module('storeApp')
  .directive('checkout', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/checkoutBox.html',
    replace: true,
    scope: true
  };
});
'use strict';


angular.module('storeApp')
  .directive('departmentNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/department-nav.html',
    replace: true,
    scope: true,
    controller: function($scope, $location) {
      $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
      };
    }
  };
});
'use strict';

angular.module('storeApp')
  .directive('navigation', function() {
    return {
      restrict: 'A',
      templateUrl: 'directives/nav.html',
      replace: true,
      scope: true,
      controller: function($scope, Authentication, $firebaseObject) {
        console.log(Authentication.isLoggedIn());
      $scope.isLoggedIn = Authentication.isLoggedIn();
      $scope.userProfile = Authentication.getUserProfile();
      console.log($scope.userProfile);
      }
    };
  });

/*

angular.module('storeApp')
.filter('getLow', function ($location, $route) {
  console.log($location.path());
  if($location.path() === '/products') {
      
    return function (item) {
      return item.replace(/[^A-Z]/g, '');
    };
  } else {
      return  function (item) {
        item = 'Everything Must Go';
        return item;
      };
    }
});

*/

'use strict';

angular.module('storeApp')
  .directive('products', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/product-section.html',
    replace: true,
    scope: true
  };
});
'use strict';

angular.module('storeApp')
  .directive('register', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/register.html',
    replace: true,
    scope: true
  };
});
'use strict';


angular.module('storeApp')
  .directive('shoppingCart', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/shopping-cart.html',
    replace: true,
    scope: true
  };
});

'use strict';

angular.module('storeApp')
  .controller('AuthCtrl', ['$scope', '$q', '$rootScope', '$firebaseAuth', 'FIREBASE_URL',
    '$location', 'Authentication',
    function($scope, $q, $rootScope, $firebaseAuth,
      FIREBASE_URL, $location, Authentication) {

      $scope.success = Authentication.isLoggedIn();


      $scope.login = function(user) {
        Authentication.login($scope.user)
          .then(function(user) {
            Authentication.getUserProfile(user.uid);
            $location.path('/products');
          }).catch(function(error) {
            $scope.message = error.message;
          });
      };

      $scope.register = function(user) {
        Authentication.register($scope.user)
          .then(function(user) {
            Authentication.login($scope.user);
            $location.path('/products');
          }).catch(function(error) {
            $scope.message = error.message;
          });
      };
  
      $scope.toRegister = function() {
        $location.path('/register');
      };

      $scope.toLogin = function() {
        $location.path('/login');
      };

      $scope.toProducts = function() {
        $location.path('/products');
      };


    }
  ]);

'use strict';

angular.module('storeApp')
  .controller('checkoutCtrl', ['$scope', 'cartService',
    function($scope, cartService) {

      $scope.checkout = cartService;

      cartService.checkout().then(function(items) {
        $scope.items = items.cart.contents;
        $scope.totals = items.cart.totals.pre_discount.rounded;
      });

    }
  ]);

'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', ['$scope', '$q', 'productService', 'deptService', 'cartService',
   function($scope, $q, productService, deptService, cartService) {

     $scope.departments = [];
     $scope.products = [];
     $scope.items = [];
     

     $scope.cart = cartService;
     $scope.dept = deptService;
     

     deptService.deptList().then(function(departments){
         $scope.departments = departments;
    });

    productService.getList().then(function(products){
        $scope.products = products;
    });

    productService.getCategory().then(function(products){
        $scope.products = products;
    });

    cartService.itemList().then(function(items){
        $scope.items = items;
    });


    

  }]);
