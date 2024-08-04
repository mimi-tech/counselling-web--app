import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUA52j_ymehKAy7IEdb5gqxJNFKbQZ_XY",
  authDomain: "deuscurat-admin.firebaseapp.com",
  projectId: "deuscurat-admin",
  storageBucket: "deuscurat-admin.appspot.com",
  messagingSenderId: "959794755644",
  appId: "1:959794755644:web:026e35a5def60b4878eb39",
  measurementId: "G-1NM9F07B3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db, collection, addDoc };

