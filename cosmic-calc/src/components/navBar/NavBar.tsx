import React from "react";
import { Nav, NavLink, NavMenu } from "./navBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/login" activeStyle>
            login
          </NavLink>
          <NavLink to="/profile" activeStyle>
            profile
          </NavLink>
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
