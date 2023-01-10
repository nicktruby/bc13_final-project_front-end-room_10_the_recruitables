// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD_baiwXcjxLa6TGl9ODej1SrGY0qRbGQ",
  authDomain: "cosmic-calcs.firebaseapp.com",
  projectId: "cosmic-calcs",
  storageBucket: "cosmic-calcs.appspot.com",
  messagingSenderId: "771192624395",
  appId: "1:771192624395:web:9ed8a86a4f25fd71343e0e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

// Initialize Firebase

export const auth = getAuth(app);

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        score: 0,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await getDoc(doc(db, "users", uid));
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};
