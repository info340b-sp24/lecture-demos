import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
// import { initializeApp } from "firebase/app"; //added from firebase

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUSGwmqCD65UMoKjAW6d6UVRJPw4jez0Y",
  authDomain: "info340bsp24.firebaseapp.com",
  projectId: "info340bsp24",
  storageBucket: "info340bsp24.appspot.com",
  messagingSenderId: "9504675761",
  appId: "1:9504675761:web:b98b1b4df824c540918f90"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);