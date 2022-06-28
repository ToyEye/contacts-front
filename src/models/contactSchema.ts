import * as yup from 'yup';

const contactSchema = yup.object().shape({
  name: yup.string().min(3).max(20).required('Name is required'),
  number: yup
    .string()
    .matches(
      /+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Enter valid number'
    )
    .required('number is Required'),
});

export default contactSchema;
