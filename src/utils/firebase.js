// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN1_9nBX7xV1iAOpJsvnJTt9-0fVHcEfc",
  authDomain: "netflix-gpt-1ae95.firebaseapp.com",
  projectId: "netflix-gpt-1ae95",
  storageBucket: "netflix-gpt-1ae95.firebasestorage.app",
  messagingSenderId: "1052553784422",
  appId: "1:1052553784422:web:0af17fb03c62ff7ece91a7",
  measurementId: "G-K3GDF5BJ5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
