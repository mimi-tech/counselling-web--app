import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvcAgXfFBnL53uZRMar8xiWeKdKbNECig",
  authDomain: "deus-curat.firebaseapp.com",
  projectId: "deus-curat",
  storageBucket: "deus-curat.appspot.com",
  messagingSenderId: "482187601771",
  appId: "1:482187601771:web:f8bee0992f297a59508e2e",
  measurementId: "G-JMDXP2T50B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db, collection, addDoc };

