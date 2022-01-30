// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBrg8M2jA1M7Ca7k9yTSk_r7D4Qis3gTCg",
  authDomain: "telegram-4e6e1.firebaseapp.com",
  projectId: "telegram-4e6e1",
  storageBucket: "telegram-4e6e1.appspot.com",
  messagingSenderId: "759297276731",
  appId: "1:759297276731:web:738a9644cbcbaf4ea1551e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage, app }