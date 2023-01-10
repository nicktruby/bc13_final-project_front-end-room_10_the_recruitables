//when user is logged into firebase display data from the users firestore collection

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import NavBar from "../components/navBar/NavBar";

function Profile() {
  const [user, setUser] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUserData(userData);
      } else {
        setUserData({});
      }
    });
  }, [userData]);

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
  }, [user.email]);
  console.log(user);
  console.log(user.email);
  console.log(userData);

  //check firebase email against GET request email and display data from score parameter, if not post new user information to backgroundBlendMode:

  useEffect(() => {
    const retrieveOrCreateUser = async () => {
      const response = await fetch(
        `http://localhost:3001/api/users/email/${user.email}`
      );
      const data = await response.json();
      console.log(data);
      if (data.payload) {
        setUserScore(data.payload.total_score);
      } else {
        const response = await fetch(`http://localhost:3001/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            total_score: 0,
          }),
        });
        const data = await response.json();
        console.log(data);
      }
    };
    retrieveOrCreateUser();
  }, [userScore, user.email]);

  return (
    <div>
      <NavBar />
      <h3>Profile</h3>
      <h4>{user.email}</h4>
      <h4>{userData.displayName}</h4>
      <h4>{userScore} </h4>
    </div>
  );
}

export default Profile;
