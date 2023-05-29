import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
