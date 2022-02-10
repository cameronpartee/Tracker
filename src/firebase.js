import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHEaqzNT7XiJK-tRqZnlOSWYHhtja8g8g",
  authDomain: "progressiontracker-7ea67.firebaseapp.com",
  databaseURL: "https://progressiontracker-7ea67-default-rtdb.firebaseio.com",
  projectId: "progressiontracker-7ea67",
  storageBucket: "progressiontracker-7ea67.appspot.com",
  messagingSenderId: "1091547871406",
  appId: "1:1091547871406:web:7f5b6e3ffab313a15e553f",
  measurementId: "G-6J5XJTTRPJ",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
