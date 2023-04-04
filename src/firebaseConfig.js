
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-U-mVlrgJW28mo1CK-ZAJ3VnrPNaAXw8",
  authDomain: "skins-csgo.firebaseapp.com",
  projectId: "skins-csgo",
  storageBucket: "skins-csgo.appspot.com",
  messagingSenderId: "450673772391",
  appId: "1:450673772391:web:a6165baa0371236f3c51c2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)