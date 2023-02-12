import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  // Firebase credentials
  apiKey: "AIzaSyBseo2KJ3YJDNcBBqtIhVcTR81NIycj5rQ",
  authDomain: "smart-insurance-e89d0.firebaseapp.com",
  databaseURL: "https://smart-insurance-e89d0-default-rtdb.firebaseio.com",
  projectId: "smart-insurance-e89d0",
  storageBucket: "smart-insurance-e89d0.appspot.com",
  messagingSenderId: "534031451222",
  appId: "1:534031451222:web:14749792b8dc422701a7f7",
  measurementId: "G-CNVLPBZXPP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
