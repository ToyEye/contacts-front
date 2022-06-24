import styled from "styled-components";

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

  input {
    padding-top: 5px;
    padding-left: 15px;
    padding-bottom: 5px;
    outline: none;
    border: 1px solid #dedede;

    ::placeholder {
      font-size: 12px;
    }
  }
`;

const FormSpanStyled = styled.div`
  text-align: center;
  line-height: 1.21;
  font-size: 13px;
  margin-top: 16px;
  margin-bottom: 3px;
`;

export { ContainerStyled, FormStyled, FormSpanStyled };
