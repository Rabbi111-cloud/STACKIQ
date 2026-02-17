import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1wROrYjI44bPY9s1z9vfHKGoHjTN__Sc",
  authDomain: "stackiq-1acc4.firebaseapp.com",
  projectId: "stackiq-1acc4",
  storageBucket: "stackiq-1acc4.firebasestorage.app",
  messagingSenderId: "129356211281",
  appId: "1:129356211281:web:90023d1cc9be859aad0470"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
