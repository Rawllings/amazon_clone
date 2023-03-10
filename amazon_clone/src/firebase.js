// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5ijF0FNTsDCe_sIliATr5012PUfFaxs8",
  authDomain: "challenge-bd883.firebaseapp.com",
  projectId: "challenge-bd883",
  storageBucket: "challenge-bd883.appspot.com",
  messagingSenderId: "107549091005",
  appId: "1:107549091005:web:8736f8be7d496ae042c3d4",
  measurementId: "G-BRK2N2DQPE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
