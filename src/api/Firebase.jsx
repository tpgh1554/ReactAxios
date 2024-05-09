// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKMv5fhzfL4OToyQRbCjIJVtHhBr9-eUU",
  authDomain: "tpgh-b396e.firebaseapp.com",
  projectId: "tpgh-b396e",
  storageBucket: "tpgh-b396e.appspot.com",
  messagingSenderId: "562282270748",
  appId: "1:562282270748:web:bd6be95833e791e05acfd9",
  measurementId: "G-1TXXD9YJXQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
