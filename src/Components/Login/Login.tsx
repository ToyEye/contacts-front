import React from "react";
import { useFormik } from "formik";
import { ContainerStyled, FormStyled, FormSpanStyled } from "./LoginStyled";
interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const onSubmit = () => {
    console.log("click");
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    onSubmit,
  });

  return (
    <ContainerStyled>
      <h1>Login</h1>
      <FormStyled onSubmit={formik.handleSubmit}>
        <label>
          <FormSpanStyled>Email adress</FormSpanStyled>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your email"
          />
        </label>
        <label>
          <FormSpanStyled>Password</FormSpanStyled>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Submit</button>
      </FormStyled>
    </ContainerStyled>
  );
};
export default Login;
