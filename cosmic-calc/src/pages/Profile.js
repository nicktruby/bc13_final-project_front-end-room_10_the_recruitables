//when user is logged into firebase display data from the users firestore collection

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import NavBar from "../components/navBar/NavBar";
import React from "react";
import "./profile.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Game from "./Game";
import profileImage from "../images/Background_Buttons/MonsterRed.png";


function Profile() {
  const [user, setUser] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [userData, setUserData] = useState({});

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUserData(userData);
      } else {
        setUserData({});
      }
    });

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
      if (data.payload.email === user.email) {
        setUserScore(data.payload.total_score);
      } if (!data.payload) {
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


  const navigate = useNavigate();

  const handleGame = () => {
    navigate("/game");
  };

  return (
    <div className="profilePageDiv">
      <img className="profileImage" src={profileImage} alt="profileImage" />

      <div className="profileDiv">
        {/* <h3 className="welcome">Welcome</h3> */}
        {/* <h4 className="name">Lucy McHugh</h4> */}
        <h4 className="username">Welcome MonsterLu!</h4>
        <h4 className="score">Total score: 8 </h4>
        <button className="gameButton" onClick={handleGame}>
          Let's play!
        </button>
      </div>

      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default Profile;
