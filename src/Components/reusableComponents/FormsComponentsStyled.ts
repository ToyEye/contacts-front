import styled from "styled-components";
import { media } from "../../helpers";

const ContainerStyled = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;

  h1 {
    font-size: 36px;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  button {
    margin-top: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    font-size: 16px;
    line-height: 1.21;
    background-color: ${(props) => props.theme.colors.secondaryBg};
    color: ${(props) => props.theme.colors.mainText};
  }
`;

const LabelStyled = styled.label`
  display: block;
  position: relative;
  margin-bottom: 15px;

  input {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    outline: none;
    border: 1px solid #dedede;

    ::placeholder {
      font-size: 12px;
    }
  }

  p {
    color: ${(props) => props.theme.colors.error};
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    font-size: 12px;
  }
`;

const FormSpanStyled = styled.div`
  text-align: center;
  line-height: 1.21;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 3px;

  ${media.tablet} {
    text-align: left;
  }
`;

export { ContainerStyled, FormStyled, FormSpanStyled, LabelStyled };
