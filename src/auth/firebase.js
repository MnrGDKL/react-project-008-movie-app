import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithRedirect, 
  signOut
} from "firebase/auth";
import { Navigate } from "react-router-dom";

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

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      );
    navigate("/");
    console.log(userCredential);
    
    } 
  catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth, 
      email, 
      password
      );
    navigate("/");
    console.log(userCredential);
    }
  catch (error) {
    alert(error.message);
  }
}

export const logOut = (navigate) => {
  signOut(auth);
  alert("You have been logged out");
  navigate("/login");
}


export const googleSignIn = async (navigate) => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  signInWithRedirect(auth, provider);
  navigate("/");
};

