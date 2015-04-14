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
