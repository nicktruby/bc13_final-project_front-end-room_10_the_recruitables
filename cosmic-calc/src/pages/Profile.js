//when user is logged into firebase display data from the users firestore collection

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import NavBar from "../components/navBar/NavBar";

function Profile() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUserData(userData);
      } else {
        setUserData(null);
      }
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const userCollection = collection(db, "users");
    getDocs(userCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email === user.email) {
          setUserData(doc.data());
        }
      });
    });
  }, [user]);
  console.log(user);
  return (
    <div>
      <NavBar />
      <h3>Profile</h3>
      <h4>{user?.email}</h4>
      <h4>{userData?.displayName}</h4>
      <h4>{userData?.score}</h4>
    </div>
  );
}

export default Profile;
