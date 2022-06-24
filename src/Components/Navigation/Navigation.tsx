import React from "react";
import { NavLinkStyled } from "./Navigation.styled";

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
      <NavLinkStyled to="/signup">Register</NavLinkStyled>
    </nav>
  );
};

export default Navigation;
