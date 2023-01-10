import React from "react";
import { Nav, NavLink, NavMenu } from "./navBarElements";
import logo from "./logo.png";
import "./logo.css";
import Logout from "../Authentication/Logout";
//if use is not logged in display login and register buttons and if they are logged in display the profile

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Nav>
        <img src={logo} alt="logo" className="logo" />
        <NavMenu>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/progress" activeStyle>
            Progress
          </NavLink>
          <NavLink to="/game" activeStyle>
            Game
          </NavLink>
          <NavLink activeStyle>
            <Logout />
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;
