// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8aps-Q5SVEcYqIpAG0IYCfiEqnVHY33A",
  authDomain: "your-web-builder.firebaseapp.com",
  projectId: "your-web-builder",
  storageBucket: "your-web-builder.appspot.com",
  messagingSenderId: "717468373271",
  appId: "1:717468373271:web:afd08baa92687270a2a752",
  measurementId: "G-B9RRR7WT35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = new getAuth(app);
const provider = new GoogleAuthProvider()
const db = getFirestore(app);
const storage = new getStorage(app);



export { db, auth, storage, provider }