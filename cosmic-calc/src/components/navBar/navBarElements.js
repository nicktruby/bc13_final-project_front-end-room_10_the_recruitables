// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #52366c;
  height: 85px;
  display: flex;
  justify-content: right;
  z-index: 12;
  textdecoration: ;
  font-family: "Bubblegum Sans", sans-serif;
  font-weight: 900;
  border-radius: 5%;
  font-size: 18px;
  borderbottomcolor: 1px #01aa31;
  borderbottomstyle: groove;
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
    background: #01aa31;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.803);
    transition: 0.2s ease-in-out;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  padding-left: 30cm;

  align-items: right;
  justifycontent: flex-end;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
