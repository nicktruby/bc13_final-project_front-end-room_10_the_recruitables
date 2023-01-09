import { Routes, Route } from "react-router-dom";
// import Login from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import Progress from "./pages/Progress";
import NavBar from "./components/navBar/NavBar";
import LoginButton from "./components/Authentication/Login"
import LogoutButton from "./components/Authentication/Logout";


export default function App() {
  return (
    <div>
      <div>
   <LoginButton/>
   <LogoutButton/>
        <NavBar />
       

        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Profile />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </div>
  );
}
