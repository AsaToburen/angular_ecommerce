'use strict';

angular.module('storeApp').factory("Auth", ["$firebaseAuth", "FIREBASE_URL",
  function($firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL, "example3");
    return $firebaseAuth(ref);
  }
]);

angular.module('storeApp')
  .factory('Authentication', ['$firebase', '$location', '$q', '$firebaseObject',
    '$firebaseAuth', 'FIREBASE_URL',

    function($firebase, $location, $q, $firebaseObject, $firebaseAuth, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);

      var myObject = {

        logAuth : $firebaseAuth(ref),

        authData: {},
        userData: {},

        logout: function(){
          myObject.logAuth.$unauth();
          $location.path('/login');
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
                console.log("Profile set successfully!");
              }
            });
          });
        }
      };
      return myObject;
    }
  ]);
