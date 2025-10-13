import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaORbKIP0vOVdEx6xslsphhRZAC8ZBtRo",
  authDomain: "login-8af64.firebaseapp.com",
  projectId: "login-8af64",
  storageBucket: "login-8af64.firebasestorage.app",
  messagingSenderId: "202443139457",
  appId: "1:202443139457:web:60bcab467ff5356775e080",
  measurementId: "G-1GGRZHP8Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Provedor Google
const googleProvider = new GoogleAuthProvider();

// Função login popup
async function signInWithGooglePopup() {
    try {
        // Use a função correta do Firebase
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } 
    catch (error) {
        throw error;
    }
}

// Função para logout
async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };