import { initializeApp } from "firebase/app";

import { Auth } from "firebase/auth";

import { Database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAS1xqjGTMihE6KJipJsVSjIC8ca3gwJdg",
  authDomain: "letmeask-c5ec4.firebaseapp.com",
  databaseURL: "https://letmeask-c5ec4-default-rtdb.firebaseio.com",
  projectId: "letmeask-c5ec4",
  storageBucket: "letmeask-c5ec4.appspot.com",
  messagingSenderId: "184745214345",
  appId: "1:184745214345:web:a46efd3275011dc24aa158",
};

initializeApp(firebaseConfig);

// export default Auth()
// export const database = firebase.database();
