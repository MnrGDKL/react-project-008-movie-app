import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCXhVo3ua5cnpnG4IzIo23czXD-C0F9d8Q",
  authDomain: "movie-app-mnrgdkl.firebaseapp.com",
  projectId: "movie-app-mnrgdkl",
  storageBucket: "movie-app-mnrgdkl.appspot.com",
  messagingSenderId: "207634310592",
  appId: "1:207634310592:web:f0b2ceb049ffc3f6ef9425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);