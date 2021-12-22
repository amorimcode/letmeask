import { Auth } from 'firebase/auth';
import {initializeApp} from 'firebase/app'

import { Auth } from 'firebase/auth'
import {Database } from'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAS1xqjGTMihE6KJipJsVSjIC8ca3gwJdg",
    authDomain: "letmeask-c5ec4.firebaseapp.com",
    databaseURL: "https://letmeask-c5ec4-default-rtdb.firebaseio.com",
    projectId: "letmeask-c5ec4",
    storageBucket: "letmeask-c5ec4.appspot.com",
    messagingSenderId: "184745214345",
    appId: "1:184745214345:web:a46efd3275011dc24aa158"
  };

initializeApp(firebaseConfig);

<<<<<<< HEAD
// export default Auth()
// export const database = firebase.database();
=======
// export default {Auth, Database}
>>>>>>> 0ac6c24ad8f8dc1c0e3f6124d9625cce3373307c
