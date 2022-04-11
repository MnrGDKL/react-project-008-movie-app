import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA3fORBjk_8v0ooe9zQKTGTOHVJ-ogtvII",
    authDomain: "movie-search-df2f6.firebaseapp.com",
    projectId: "movie-search-df2f6",
    storageBucket: "movie-search-df2f6.appspot.com",
    messagingSenderId: "380572151542",
    appId: "1:380572151542:web:f1cd533ea359297f9cc6d7"
  };


  const FireBaseApp = firebase.initializeApp(firebaseConfig);

  const db = FireBaseApp.firestore();


  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  
  export default db;
  export {auth, provider};