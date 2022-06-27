import React from 'react';
import { AuthBar, Navigation } from '../Navigation';
import { Container } from './AppBar.styled';

const AppBar: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <AuthBar />
    </Container>
  );
};

export default AppBar;
