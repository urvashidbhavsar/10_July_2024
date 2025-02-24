import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeEhIxt3952uuVuMTPQxBYgC4jRjbcP94",
    authDomain: "tododb-94158.firebaseapp.com",
    projectId: "tododb-94158",
    storageBucket: "tododb-94158.firebasestorage.app",
    messagingSenderId: "236411159549",
    appId: "1:236411159549:web:619e65164e3fa4c8a5cf94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };