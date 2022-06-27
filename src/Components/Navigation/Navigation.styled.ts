import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.mainText};
  font-size: 1rem;
`;

export { NavLinkStyled };
