'use strict';

angular.module('storeApp')
  .factory('Authentication', ['$firebase', '$cookieStore', '$cookies', '$q', '$firebaseObject',
    '$firebaseAuth', 'FIREBASE_URL',

    function($firebase, $cookieStore, $cookies, $q, $firebaseObject, $firebaseAuth, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);

      var myObject = {

        authData: {},
        userData: {},

        isLoggedIn: function() {
          return angular.isDefined(myObject.authData.uid);
        },

        login: function(user) {
          var deferred = $q.defer();
          auth.$authWithPassword({
            email: user.email,
            password: user.password
          }).then(function(authData) {
            //myObject.isLoggedIn();
            myObject.userData = authData;

            $cookieStore.put(authData.uid, authData.token);

            var userProfile = $firebaseObject(ref.child('users').child(authData.uid));
            userProfile.$loaded().then(function() {
              myObject.userData = userProfile;
              deferred.resolve(myObject.userData);
            });
          });
          return deferred.promise;
        },


   //     loginWithToken: function(authData) {
   //       var token = $cookieStore.get(authData.uid);
   //       var deferred = $q.defer();
   //       auth.$authWithCustomToken(token)
   //         .then(function(authData) {
   //           myObject.userData = authData;
   //           var userProfile = $firebaseObject(ref.child('users').child(authData.uid));
   //           userProfile.$loaded().then(function() {
   //             console.log("Logged in as:", authData.uid);
   //           }).catch(function(error) {
   //             console.error("Authentication failed:", error);
   //           });
   //         });
   //       return deferred.promise;
   //     },

        logout: function(user) {
          console.log($cookieStore);
          $cookieStore.remove(myObject.authData.uid);
          auth.$unauth();
          console.log('loggedOut');
          myObject.authData = {};
          myObject.userData = {};
          myObject.isLoggedIn();
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
    }
  ]);
