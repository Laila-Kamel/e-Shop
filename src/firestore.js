// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGyoPTWc9ApaZHKHJI6vIMsme05-Pey6Q",
  authDomain: "eshop-f976d.firebaseapp.com",
  projectId: "eshop-f976d",
  storageBucket: "eshop-f976d.appspot.com",
  messagingSenderId: "619094215324",
  appId: "1:619094215324:web:401fa6224eeb84892c3b59"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore= app.firestore();