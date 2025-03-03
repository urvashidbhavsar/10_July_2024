import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhO-xS2WTlbFZV56SptYOnXODi64hlrqs",
    authDomain: "loginauth-1a576.firebaseapp.com",
    projectId: "loginauth-1a576",
    storageBucket: "loginauth-1a576.firebasestorage.app",
    messagingSenderId: "57633816829",
    appId: "1:57633816829:web:86bea37fe779c8bf853e94",
    measurementId: "G-J0J5ST2T6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export default app;