import React from 'react';
import { NavLinkStyled } from './Navigation.styled';

const AuthBar: React.FC = () => {
  return (
    <nav>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
    </nav>
  );
};

export default AuthBar;
