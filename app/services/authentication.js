'use strict';

angular.module('storeApp')
  .factory('Authentication', ['$firebase', '$location', '$anchorScroll', '$q', '$firebaseObject',
    '$firebaseAuth', 'FIREBASE_URL',

    function($firebase, $location, $anchorScroll, $q, $firebaseObject, $firebaseAuth, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);

      var myObject = {

        auth: $firebaseAuth(ref),

        authData: {},
        userData: {},

        login: function() {



        },
        logout: function() {
          auth.$unauth();
          $location.path('/login');
          $location.hash('auth');
          $anchorScroll();
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
