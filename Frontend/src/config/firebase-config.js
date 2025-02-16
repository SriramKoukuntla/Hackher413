import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgGe9CijJibDtaZIZFQH7Y44VkaF5y_SI",  
    authDomain: "loveisintheair-60b32.firebaseapp.com",
    projectId: "loveisintheair-60b32",
    storageBucket: "loveisintheair-60b32.firebasestorage.app",
    messagingSenderId: "496524133629",
    appId: "1:496524133629:web:fb92633f9461d7d9b7ea94",
    measurementId: "G-KQX59YLY5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
