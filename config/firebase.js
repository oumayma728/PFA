// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAtJy1JK377KOHuN1jYNC8we2FP2xrr8c",
  authDomain: "sos-6bb5c.firebaseapp.com",
  projectId: "sos-6bb5c",
  storageBucket: "sos-6bb5c.appspot.com",
  messagingSenderId: "161627145013",
  appId: "1:161627145013:web:1feb98ca7426e82372c27c",
  measurementId: "G-BVVYPL1YNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);