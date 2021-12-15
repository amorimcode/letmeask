import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAS1xqjGTMihE6KJipJsVSjIC8ca3gwJdg",
    authDomain: "letmeask-c5ec4.firebaseapp.com",
    databaseURL: "https://letmeask-c5ec4-default-rtdb.firebaseio.com",
    projectId: "letmeask-c5ec4",
    storageBucket: "letmeask-c5ec4.appspot.com",
    messagingSenderId: "184745214345",
    appId: "1:184745214345:web:a46efd3275011dc24aa158"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();