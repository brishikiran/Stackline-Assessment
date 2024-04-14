import React from "react";
import { NavbarContainer, Logo, LogoImg } from "./NavbarStyles";
import logo from "./stackline_logo.svg";


const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoImg src={logo} alt="Stackline Logo" />
      </Logo>
    </NavbarContainer>
  );
};

export default Navbar;