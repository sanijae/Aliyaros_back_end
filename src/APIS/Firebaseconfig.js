import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeyVJeN0c1OV7ih-n1ZVvTS0mvxgxIDw8",
  authDomain: "alicafe-ae873.firebaseapp.com",
  projectId: "alicafe-ae873",
  storageBucket: "alicafe-ae873.appspot.com",
  messagingSenderId: "674267611641",
  appId: "1:674267611641:web:3deba2b4f449298e28bd28",
  measurementId: "G-Y9VQ2YPKLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const  Auths = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
