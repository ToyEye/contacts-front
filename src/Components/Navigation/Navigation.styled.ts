import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLinkStyled = styled(NavLink)`
  display: "inline-block";
  text-decoration: "none";
  padding: 12;
  font-weight: 700;
  color: "white";
  font-size: "1rem";

  :active {
    color: "black";
  }
`;

export { NavLinkStyled };
