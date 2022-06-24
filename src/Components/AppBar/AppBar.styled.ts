import styled from "styled-components";
// import media from "../../helpers/mediaHelper";

const Container = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.colors.mainBg};
  width: 100%;
  color: white;
  padding: 0 15px;
`;

const NavigationStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
`;

export { Container, NavigationStyled };
