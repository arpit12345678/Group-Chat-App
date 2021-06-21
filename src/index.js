import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAMfUK1jNdMkOoEJ5nmEnZ5460n0ixHf8A",
    authDomain: "messenger-98af9.firebaseapp.com",
    projectId: "messenger-98af9",
    storageBucket: "messenger-98af9.appspot.com",
    messagingSenderId: "1041133017765",
    appId: "1:1041133017765:web:8555bc1b2f9a63a722cb4c",
    measurementId: "G-2LYTYSJDCR"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
