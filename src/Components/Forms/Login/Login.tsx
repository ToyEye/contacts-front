import React from 'react';
import { useFormik } from 'formik';
import {
  ContainerStyled,
  FormStyled,
  FormSpanStyled,
  LabelStyled,
} from '../../reusableComponents/FormsComponentsStyled';
import { loginSchema } from '../../../models';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const onSubmit = () => {
    console.log('click');
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <ContainerStyled>
      <h1>Login</h1>
      <FormStyled onSubmit={formik.handleSubmit}>
        <LabelStyled>
          <FormSpanStyled>Email adress</FormSpanStyled>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter your email"
          />
          <p>{formik.touched.email && formik.errors.email}</p>
        </LabelStyled>
        <LabelStyled>
          <FormSpanStyled>Password</FormSpanStyled>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Enter your password"
          />
          <p>{formik.touched.password && formik.errors.password}</p>
        </LabelStyled>
        <button type="submit">Submit</button>
      </FormStyled>
    </ContainerStyled>
  );
};
export default Login;
