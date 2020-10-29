import React, { useState, useEffect } from 'react';
import {useHistory, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import firebase from '../utils/Firebase';
import axios from 'axios';


export default () => {

   const [user, setUser] = useState(null);
   const history = useHistory();

   if ("localStorage" in window) {
      var emailForSignIn = window.localStorage.getItem('emailForSignIn')
   }
   
   /**
    * Handles automatically signing-in the app if we clicked on the sign-in link in the email.
    */
   function handleSignIn() {
      // [START handlesignin]
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
         // console.log(emailForSignIn);

         if (!emailForSignIn) {
            // User opened the link on a different device. To prevent session fixation attacks, ask the
            // user to provide the associated email again. For example:
            emailForSignIn = window.prompt('Please provide the email you\'d like to sign-in with for confirmation.');
         }
         if (emailForSignIn) {
            // The client SDK will parse the code from the link for you.
            firebase.auth().signInWithEmailLink(emailForSignIn, window.location.href)
            .then(function (result) {
               // Clear the URL to remove the sign-in link parameters.
                  history.replace('/profile');

               // register the user in the recipe DB
               axios.get(`/api/user/${emailForSignIn}`)
                  .then(response => {
                     setUser(response.data)
                     // console.log(response.data)
                  })
                  .catch(error => console.log(error))
               // Clear email from storage.
               window.localStorage.removeItem('emailForSignIn');
               // var isNewUser = result.additionalUserInfo.isNewUser;
            }).catch(function (error) {
               // Handle Errors here.
               handleError(error);
            });
         }
      }
      // [END handlesignin]
   }

   useEffect(()=>{
      if (!user) {
         console.log("signing in to set user")
         handleSignIn();
      }
   })

   // [START authstatelistener]
   firebase.auth().onAuthStateChanged((fbuser) => {
      if (fbuser && !user) {
         axios.get(`/api/user/${fbuser.email}`)
            .then(response => setUser(response.data))
            .catch(error => console.log(error));

         // console.log(`User is signed in as: \n${fbuser.email}\n${fbuser.uid}\n${fbuser.displayName} `)
         // console.log(fbuser.providerData)
         // User is signed in.
         // var displayName = fbuser.displayName;
         // var email = fbuser.email;
         // var emailVerified = fbuser.emailVerified;
         // var uid = fbuser.uid;
         // var providerData = fbuser.providerData;
      } 

   });
   // [END authstatelistener]

   function handleError(error) {
      console.log("Error: ", error.code, error.message)
   }

   return (
      <div>
         {user ? 
         <div>
            <h1>{user.email} is logged in</h1>
            <h2>User Name / Display Name</h2>
            <p>{user.username}</p>
            <h2>Name</h2>
            <p>{user.name}</p>
            <Link to={{pathname: '/', data:user}}>
               <Button>Go Home</Button>
            </Link>
         </div>
          : <h2>please log in</h2>}
      </div>
   )
}