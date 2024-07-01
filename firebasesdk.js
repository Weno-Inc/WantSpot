// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkIxFvEmX-_cX8EcUnEAP9EQ_BINiy2F8",
  authDomain: "wantspotcli.firebaseapp.com",
  projectId: "wantspotcli",
  storageBucket: "wantspotcli.appspot.com",
  messagingSenderId: "546987694299",
  appId: "1:546987694299:web:730abb8b3294ba200014fe",
  measurementId: "G-WY6E84D953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);