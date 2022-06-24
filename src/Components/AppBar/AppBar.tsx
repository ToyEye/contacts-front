import React from "react";
import Navigation from "../Navigation";
import { Container } from "./AppBar.styled";

const AppBar: React.FC = () => {
  return (
    <Container>
      <Navigation />
    </Container>
  );
};

export default AppBar;
