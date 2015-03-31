'use strict';

angular.module('storeApp')
  .factory('Authentication', [ '$firebase', '$firebaseAuth', 
    '$routeParams', '$location', 'FIREBASE_URL',

 function( $firebase, $firebaseAuth, 
    $routeParams, $location, FIREBASE_URL) {

      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseAuth(ref);
      

      var myObject = {

        login: function(user){
          return auth.$authWithPassword({
            email: user.email,
            password: user.password
          });
        },

       register: function(user) {
        return auth.$createUser({
          email: user.email,
          password: user.password
        }).then(function(regUser){

          var profileRef = new Firebase (FIREBASE_URL + 'users');

           profileRef.set({
            date   : Firebase.ServerValue.TIMESTAMP,
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

}]); 