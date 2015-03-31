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
