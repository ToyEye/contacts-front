import React from 'react';
import { useFormik } from 'formik';
import {
  ContainerStyled,
  FormStyled,
  LabelStyled,
  FormSpanStyled,
} from '../FormsComponentsStyled';
import { registerSchema } from '../../../models';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register: React.FC = () => {
  const onSubmit = () => {
    console.log('click');
  };

  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: registerSchema,
    validateOnBlur: true,
    onSubmit,
  });
  return (
    <ContainerStyled>
      <h1>Register</h1>
      <FormStyled>
        <LabelStyled>
          <FormSpanStyled>Name</FormSpanStyled>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.touched.name && formik.errors.name}</p>
        </LabelStyled>
        <LabelStyled>
          <FormSpanStyled>Email</FormSpanStyled>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.touched.email && formik.errors.email}</p>
        </LabelStyled>
        <LabelStyled>
          <FormSpanStyled>Password</FormSpanStyled>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.touched.password && formik.errors.password}</p>
        </LabelStyled>
        <LabelStyled>
          <FormSpanStyled>Password</FormSpanStyled>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </p>
        </LabelStyled>
        <button type="submit">Submit</button>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Register;
