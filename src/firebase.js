// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBwrTEU-ZZkEMIY_MAX74uXVCp2hmW3AR0",
//     authDomain: "todo-app-c3f9e.firebaseapp.com",
//     projectId: "todo-app-c3f9e",
//     storageBucket: "todo-app-c3f9e.appspot.com",
//     messagingSenderId: "96461924885",
//     appId: "1:96461924885:web:3dc84fd3bbdfe445c37c1c",
//     measurementId: "G-8C8X6T707Z"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBwrTEU-ZZkEMIY_MAX74uXVCp2hmW3AR0",
    authDomain: "todo-app-c3f9e.firebaseapp.com",
    databaseURL: "https://todo-app-c3f9e-default-rtdb.firebaseio.com/",
    projectId: "todo-app-c3f9e",
    storageBucket: "todo-app-c3f9e.appspot.com",
    messagingSenderId: "96461924885",
    appId: "1:96461924885:web:3dc84fd3bbdfe445c37c1c",
    measurementId: "G-8C8X6T707Z"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;
