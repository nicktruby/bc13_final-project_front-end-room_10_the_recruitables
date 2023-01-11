//when user is logged into firebase display data from the users firestore collection

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
import NavBar from "../components/navBar/NavBar";

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      retrieveUserData(user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //match user.email from firebase to users email in the database using a GET request to the backend and display the score parameter and display name parameter

  //check firebase email against GET request email and display data from score parameter, if not post new user information to backgroundBlendMode:

  const retrieveUserData = async (user) => {
    let email = user.email;
    const response = await fetch(
      `http://localhost:3001/api/users/email/${email}`
    );
    const data = await response.json();
    console.log(data.payload);
    setUserData(data.payload);
    console.log(userData);
    return data.payload;
  };

  // useEffect(() => {
  // }, []);

  // //need to call this function once the user is logged in in the handleClick function
  // useEffect(() => {
  //   retrieveOrCreateUser();
  // }, [user]);

  return (
    <div>
      <NavBar />
      <h3>Profile</h3>
      <h4>{userData.email}</h4>
      {/* <h4>{userData.displayName}</h4> */}
      <h4>{userData.total_score} </h4>
    </div>
  );
}

export default Profile;
