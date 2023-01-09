import React from "react";
import { Nav, NavLink, NavMenu } from "./navBarElements";
import logo from "./logo.png";
import "./logo.css";


const NavBar = () => {
  return (
    <>
      <Nav>
        <fig>
          <img className="logo" src={logo} alt="logo" />
        </fig>
        <NavMenu>
       
          <NavLink to="/" activeStyle>
            profile
          </NavLink>
          {/* <NavLink to="/profile" activeStyle>
            profile
          </NavLink> */}
          <NavLink to="/progress" activeStyle>
            main
          </NavLink>
          <NavLink to="/game" activeStyle>
            game
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
