import React from 'react';

import { NavLinkStyled } from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
    </nav>
  );
};

export default Navigation;
