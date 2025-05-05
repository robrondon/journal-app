// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_xT5qCLDWyoc83b6KnSJUdiWK2SZE4Y",
  authDomain: "react-course-80cbe.firebaseapp.com",
  projectId: "react-course-80cbe",
  storageBucket: "react-course-80cbe.firebasestorage.app",
  messagingSenderId: "843070261309",
  appId: "1:843070261309:web:832eb06dcb69126f93c254"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
export const FirebaseAuth = getAuth(FirebaseApp);

// Firebase Database
export const FirebaseDB = getFirestore(FirebaseApp);

