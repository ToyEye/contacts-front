import React from 'react';
import { useFormik } from 'formik';
import { contactSchema } from '../../models';
import {
  ContainerStyled,
  FormStyled,
  FormSpanStyled,
  LabelStyled,
} from '../reusableComponents/FormsComponentsStyled';

interface Contact {
  name: string;
  number: string;
}

const initialValues: Contact = {
  name: '',
  number: '',
};

const Contacts: React.FC = () => {
  const onSubmit = () => {
    console.log('click');
  };
  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: contactSchema,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <ContainerStyled>
      <FormStyled onSubmit={formik.handleSubmit}>
        <LabelStyled>
          <FormSpanStyled>Name</FormSpanStyled>
          <input
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </LabelStyled>
        <LabelStyled>
          <FormSpanStyled>Number</FormSpanStyled>
          <input
            type="number"
            placeholder="Enter number"
            id="number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </LabelStyled>
        <button type="button">Add to contacts</button>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Contacts;
