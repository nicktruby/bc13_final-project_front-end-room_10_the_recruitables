import React from "react";
import { Nav, NavLink, NavMenu } from "./navBarElements";
import logo from "./logo.png";
import "./logo.css";
// import Logout from "../Authentication/Logout";
//if use is not logged in display login and register buttons and if they are logged in display the profile

const NavBarLogin = () => {
  return (
    <>
      <Nav>
        <img src={logo} alt="logo" className="logo" />
        <NavMenu>
          <NavLink to="/" activeStyle>
            login
          </NavLink>
          <NavLink to="/register" activeStyle>
            register
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBarLogin;
