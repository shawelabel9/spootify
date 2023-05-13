import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCeRb0YgkdKYDQ_7TYaYrJcI50NfT2Kw5w",
  authDomain: "music-library-a9d7d.firebaseapp.com",
  projectId: "music-library-a9d7d",
  storageBucket: "music-library-a9d7d.appspot.com",
  messagingSenderId: "171830499625",
  appId: "1:171830499625:web:b9b55d9cc2a6d240397f38"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}

