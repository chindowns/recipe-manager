import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../utils/Firebase';
import axios from 'axios';


export default () => {

   const [email, setEmail] = useState(null);
   const [user, setUser] = useState(null);
   const [emailForSignIn, setEmailForSignin] = useState(null);
   const history = useHistory();
   
   /**
    * Handles automatically signing-in the app if we clicked on the sign-in link in the email.
    */
   function handleSignIn() {
      // [START handlesignin]
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
         console.log(email);
         // [START_EXCLUDE]
         // Disable the sign-in button during async sign-in tasks.
         // document.getElementById('quickstart-sign-in').disabled = true;
         // [END_EXCLUDE]

         // You can also get the other parameters passed in the query string such as state=STATE.
         // Get the email if available.
         // var email = window.localStorage.getItem('emailForSignIn');
         if (!email) {
            // User opened the link on a different device. To prevent session fixation attacks, ask the
            // user to provide the associated email again. For example:
            setEmail(window.prompt('Please provide the email you\'d like to sign-in with for confirmation.'));
         }
         if (email) {
            // The client SDK will parse the code from the link for you.
            firebase.auth().signInWithEmailLink(email, window.location.href).then(function (result) {
               // Clear the URL to remove the sign-in link parameters.
               // if (history && history.replaceState) {
               //    window.history.replaceState({}, document.title, window.location.href.split('?')[0]);
               // }
               // Clear email from storage.

               // register the user in the recipe DB
               axios.get(`/api/user/${email}`)
                  .then(result => console.log(result))

               window.localStorage.removeItem('emailForSignIn');
               // Signed-in user's information.
               var user = result.user;
               var isNewUser = result.additionalUserInfo.isNewUser;
               console.log(result)
            }).catch(function (error) {
               // Handle Errors here.
               var errorCode = error.code;
               var errorMessage = error.message;
               // [START_EXCLUDE]
               // handleError(error);
               // [END_EXCLUDE]
            });
         }
      }
      // [END handlesignin]
   }

   useEffect(()=>{
     if (!email) {
        setEmail(window.localStorage.getItem('emailForSignIn'))
     }
   }, [email])

   useEffect(()=>{
      if (!user) {
         handleSignIn();
      }
   },[user])

   /**
    * initApp handles setting up UI event listeners and registering Firebase auth listeners:
    *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
    *    out, and that is where we update the UI.
    */
   // function initApp() {
   //    // Restore the previously used value of the email.
   //    var email = window.localStorage.getItem('emailForSignIn');
   //    document.getElementById('email').value = email;

   //    // Automatically signs the user-in using the link.
   //    handleSignIn();

      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function (user) {
         if (user) {
            setUser(user);
            // setEmail(user.email);
            // User is signed in.
            var displayName = user.displayName;
            // var email = user.email;
            var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // Update UI.
            // [START_EXCLUDE]
            // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            // document.getElementById('quickstart-sign-in').textContent = 'Sign out';
            // document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            // [END_EXCLUDE]
         } 

        
      });
      // [END authstatelistener]

      // document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
   


   return (
      <div>
         {user ? <h1>{email} is logged in</h1> : <h2>please log in</h2>}
      </div>
   )
}