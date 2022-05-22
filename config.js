// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz59VcwaL1AmK2xzZD889z2aUe5svrgc4",
  authDomain: "team-voting-8bc3d.firebaseapp.com",
  databaseURL: "https://team-voting-8bc3d-default-rtdb.firebaseio.com",
  projectId: "team-voting-8bc3d",
  storageBucket: "team-voting-8bc3d.appspot.com",
  messagingSenderId: "827195242149",
  appId: "1:827195242149:web:9f663f3a099cc3fae73f4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);