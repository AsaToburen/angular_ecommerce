'use strict';

angular.module('storeApp', [ 'ngRoute', 'ngAnimate', 'storeApp.moltin', 'firebase'])
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {

      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  }]).constant('FIREBASE_URL', 'https://shopangular.firebaseio.com/');

angular.module('storeApp')
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
        controller: 'DepartmentCtrl',
      })
      .when('/products/:id', {
        templateUrl: 'views/store.html',
        controller: 'DepartmentCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'checkoutCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

angular.module('storeApp')
  .factory('Authentication', ['$firebase', '$location',
    '$firebaseAuth', 'FIREBASE_URL',

    function($firebase, $location, $firebaseAuth, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);

      var myObject = {

        auth: $firebaseAuth(ref),

        authData: {},
        userData: {},

        login: function(user) {
          auth.$authWithPassword({
            email: user.email,
            password: user.password
          }).then(function(authData) {
            console.log("Authenticated successfully with payload:", authData);
          });

        },
        logout: function() {
          auth.$unauth();
          $location.path('/login');
        },

        register: function(userInput) {
          return auth.$createUser({
            email: userInput.email,
            password: userInput.password
          }).then(function(regUser) {


            var profileRef = new Firebase(FIREBASE_URL + 'users/' + regUser.uid);
            profileRef.set({
              date: Firebase.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              firstname: userInput.firstname,
              lastname: userInput.lastname,
              email: userInput.email
            }, function(error) {
              if (error) {
                console.log("Error:", error);
              } else {
                console.log("Profile set successfully!");
              }
            });
          });
        }
      };
      return myObject;
    }
  ]);

'use strict';

angular.module('storeApp')
  .factory('cartService', ['$q', '$location', 'MoltinAuth',
    function($q, $location, MoltinAuth) {

      var cartObj = {

        loading: false,

        itemList: function() {

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

        addItem: function(itemID) {

          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Cart.Insert(itemID, 1, null, function(cart) {
              deferred.resolve(cart);
            });
          })
          return deferred.promise;
        },

        contentLoaded: true,

        checkout: function() {

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

        toProducts: function() {

          $location.path('/products');

        }
      };

      return cartObj;
    }
  ]);

'use strict';

angular.module('storeApp')
  .factory('deptService', ['$q', 'MoltinAuth',
      function($q, MoltinAuth) {

        var deptObj = {

          loading: false,

          deptList: function() {

            deptObj.loading = true;

            var deferred = $q.defer();

            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.List(null, function(departments) {
                deferred.resolve(departments);
                deptObj.loading = false;
              });
            });
            return deferred.promise;
          },
        };
        return deptObj;

      }]);

'use strict';

angular.module('storeApp.moltin', [])
  .factory('MoltinAuth', ['$q', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'Z25m8FxwKcw0cAlPQuD9hOrFZquaV0rpv5shgFJS'});
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
      console.log(moltin);
    });
    return deferred.promise;
  }]);
'use strict';

angular.module('storeApp')
  .factory('productService', ['$q', '$route', 'MoltinAuth',
    function($q, $route, MoltinAuth) {

      var productObj = {

        loadingList: false,
        loadingCategory: true,

        getList: function() {

          productObj.loadingList = true;

          var deferred = $q.defer();
          $q.when(MoltinAuth).then(function(moltin) {
            moltin.Product.List(null, function(products) {
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
            moltin.Product.Search({
              category: $route.current.params.id
            }, function(products) {
              deferred.resolve(products);
              productObj.loadingCategory = false;
            });
          });
          return deferred.promise;
        }
      };
      return productObj;

    }
  ]);

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
      controller: ['$scope', 'Authentication', 

      function($scope, Authentication) {

        $scope.auth = Authentication.auth;
        $scope.logout = Authentication.logout;

      }]
    };
  });

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
  .controller('AuthCtrl', ['$scope', '$location', 'Authentication',

    function($scope, $location, Authentication) {

      $scope.login = function(user) {
        Authentication.login($scope.user);
        $location.path('/products');
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
  .controller('checkoutCtrl', ['$scope', 'Authentication', 'cartService',
    function($scope, Authentication, cartService) {

      $scope.auth = Authentication;

      $scope.checkout = cartService;

      cartService.checkout().then(function(items) {
        $scope.items = items.cart.contents;
        $scope.totals = items.cart.totals.pre_discount.rounded;
      });
    }
  ]);

'use strict';

angular.module('storeApp')
  .controller('DepartmentCtrl', ['$scope', 'productService', 'Authentication', 'deptService', 'cartService',
    function($scope, productService, Authentication, deptService, cartService) {

      $scope.auth = Authentication;

      $scope.departments = [];
      $scope.products = [];
      $scope.items = [];

      $scope.firstname = Authentication.userData.firstname;

      $scope.cart = cartService;
      $scope.dept = deptService;

      deptService.deptList().then(function(departments) {
        $scope.departments = departments;
      });

      productService.getList().then(function(products) {
        $scope.products = products;
      });

      productService.getCategory().then(function(products) {
        $scope.products = products;
      });

      cartService.itemList().then(function(items) {
        $scope.items = items;
      });
    }
  ]);
