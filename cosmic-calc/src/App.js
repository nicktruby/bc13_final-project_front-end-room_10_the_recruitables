import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile.js";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/game" element={<Game />} />
      </NavBar>
    </div>
  );
}

export default App;
