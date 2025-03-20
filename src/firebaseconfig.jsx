import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgkIakSm5OYpI9-PMIIAlqQ7fwrejIcXE",
  authDomain: "fitness-50095.firebaseapp.com",
  databaseURL: "https://fitness-50095-default-rtdb.firebaseio.com",
  projectId: "fitness-50095",
  storageBucket: "fitness-50095.firebasestorage.app",
  messagingSenderId: "938867414404",
  appId: "1:938867414404:web:3a0ddc2e4608e50a0bf9d1",
  measurementId: "G-PDZBVYJEN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;