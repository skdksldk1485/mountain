import React from 'react';
import '../../index.css';
import firebase from "firebase";
import 'firebase/auth';
import { Container, Title } from './Login.style';

var firebaseui = require('firebaseui');

const Login = () => {

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/login',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
  };

  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  return (
      <>
        <Container>
          <Title>로그인</Title>
          <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>
        </Container>
    </>
  );
}

export default Login;