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
  apiKey: "AIzaSyDA9Ym3Ee8DB-lUIDHz-sWWp1zNCIrYXYQ",
  authDomain: "chatinfo340bsp24.firebaseapp.com",
  projectId: "chatinfo340bsp24",
  storageBucket: "chatinfo340bsp24.appspot.com",
  messagingSenderId: "945906607444",
  appId: "1:945906607444:web:aa531da74209ca6476d4c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);