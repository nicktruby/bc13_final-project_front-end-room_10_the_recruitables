import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import starBackground from "./pages/Images/Background.png"

const root = ReactDOM.createRoot(document.getElementById("root"));

// document.body.style.backgroundImage = `url(${starBackground})`;
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundAttachment = "fixed";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
