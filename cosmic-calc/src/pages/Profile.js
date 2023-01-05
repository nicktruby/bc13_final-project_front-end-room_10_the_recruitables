import React from "react";
// import Data from "../Data.json";

const Profile = (user) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>name: {user.user.name}</p>
      <p>email: {user.user.email}</p>
      <p>score: {user.user.score}</p>
    </div>
  );
};

export default Profile;
