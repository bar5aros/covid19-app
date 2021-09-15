/* eslint-disable arrow-body-style */
import React from "react";
import {
  Nav,
  NavbarContainer,
  NavHome,
  NavHomeText,
  NavLink,
  NavMenu,
  NavItem,
} from "./NavElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavHome to="/">
          <NavHomeText>Covid19 App</NavHomeText>
        </NavHome>
        <NavMenu>
          <NavItem>
            <NavLink to="/Turkey">Turkey</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Germany">Germany</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Italy">Italy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/UnitedStates">United States</NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
