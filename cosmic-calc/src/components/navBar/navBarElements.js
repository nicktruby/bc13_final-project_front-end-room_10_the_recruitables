// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 85px;
  display: flex;
  flex: 1;
  z-index: 12;
  textdecoration: ;
  font-family: "Bubblegum Sans", sans-serif;
  font-weight: 900;
  border-radius: 5%;
  font-size: 18px;
  borderbottomcolor: 1px #01aa31;
  borderbottomstyle: groove;
  background-image: "../../images/nav-bar.png";
`;

export const NavLink = styled(Link)`
  color: orange;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  border-radius: 50%;
  height: 100%;
  cursor: pointer;
  &.active {
    color: red;
    background: #00621c;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.803);
    transition: 0.2s ease-in-out;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  padding-left: 70%;
  align-items: right;
  justifycontent: flex-end;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
