import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  updateProfile
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyCXhVo3ua5cnpnG4IzIo23czXD-C0F9d8Q",
//   authDomain: "movie-app-mnrgdkl.firebaseapp.com",
//   projectId: "projectId=movie-app-mnrgdkl",
//   storageBucket: "movie-app-mnrgdkl.appspot.com",
//   messagingSenderId: "207634310592",
//   appId: "1:207634310592:web:f0b2ceb049ffc3f6ef9425",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
      );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      });
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

export const logOut = () => {
  signOut(auth);
  alert("You have been logged out");
}


export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
});
}


export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      // ...
    });
};

