import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ContactFormContainer, ContactFormField, ContactFormLabel, ErrorMessageFormField, ErrorText, FormFieldBlock } from './ContactForm.styled';
import { toast } from 'react-toastify';
import CuStomBtn from 'components/Btns/CustomBtn/CustomBtn';

const initialValues = {
  fullName: '',
  email: '', 
  phone: '', 
  message: '' 
};

const schema = Yup.object({
  fullName: Yup.string().required('Wrong Fullname'),
  email: Yup.string().matches(/^\w+([.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Wrong Email').required('Wrong Email'),
  phone: Yup.string().matches(/^\d{12}$/, 'Wrong Phone').required('Wrong Phone'),
  message: Yup.string(),
});

export const ContactForm = () => {  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try { 
      setSubmitting(false);
      toast.success( `The form on behalf of ${values.fullName} has been sent`);
      resetForm();
    } catch (error) {
      toast.error("Registration failed. Please try again later.");
      setSubmitting(false);
    }
  }
  return (
    <Formik
      initialValues = {initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <ContactFormContainer>
            <ContactFormLabel htmlFor="fullName">*Full name:</ContactFormLabel>
            <FormFieldBlock>
              <ContactFormField id="fullName" name="fullName" type="text" placeholder="John Rosie" error={errors.fullName && touched.fullName ? "true" : "" }  />
              <ErrorMessageFormField name="fullName" component={ErrorText} />
            </FormFieldBlock>

            <ContactFormLabel htmlFor="email">*E-mail:</ContactFormLabel>
            <FormFieldBlock>
              <ContactFormField id="email" name="email" type="email" placeholder="johnrosie@gmail.com" error={errors.email && touched.email ? "true" : "" } />
              <ErrorMessageFormField name="email" component={ErrorText} />
            </FormFieldBlock>

            <ContactFormLabel htmlFor="phone">*Phone:</ContactFormLabel>
            <FormFieldBlock>
              <ContactFormField id="phone" name="phone" type="text" placeholder="380961234567" error={errors.phone && touched.phone ? "true" : "" } />
              <ErrorMessageFormField name="phone" component={ErrorText} />
            </FormFieldBlock>

            <ContactFormLabel htmlFor="message">Message</ContactFormLabel>
            <ContactFormField id="message" name="message" as="textarea" onChange={handleChange} value={values.message} placeholder="My message...." error="" height='146px' />
            
            <CuStomBtn label='Send' width='99px' type="submit" />

          </ContactFormContainer>
        </Form>
      )}
    </Formik>
  );
};