import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAdpST0Ebsxaqo4eNtHHvw6uShDS2hozs",
  authDomain: "musicreviw-0331.firebaseapp.com",
  projectId: "musicreviw-0331",
  storageBucket: "musicreviw-0331.appspot.com",
  messagingSenderId: "1010352111069",
  appId: "1:1010352111069:web:630b0a914f5add4cbd8a34",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
