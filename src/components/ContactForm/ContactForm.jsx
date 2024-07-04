import React from 'react';
import { Formik, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ContactFormContainer, ContactFormField, ContactFormLabel, ContactFormButton, ErrorText, SuccessMessage } from './ContactForm.styled';

const ContactForm = () => {
  return (
<Formik
      initialValues={{ fullName: '', email: '', phone: '', message: '' }}
      validationSchema={Yup.object({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email address').required('E-mail is required'),
        phone: Yup.string().required('Phone is required'),
        message: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        setTimeout(() => {
          setStatus('Form submitted successfully');
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <ContactFormContainer>
            <ContactFormLabel htmlFor="fullName">Full name</ContactFormLabel>
            <ContactFormField id="fullName" name="fullName" type="text" />
            <ErrorMessage name="fullName" component={ErrorText} />

            <ContactFormLabel htmlFor="email">E-mail</ContactFormLabel>
            <ContactFormField id="email" name="email" type="email" />
            <ErrorMessage name="email" component={ErrorText} />

            <ContactFormLabel htmlFor="phone">Phone</ContactFormLabel>
            <ContactFormField id="phone" name="phone" type="text" />
            <ErrorMessage name="phone" component={ErrorText} />

            <ContactFormLabel htmlFor="message">Message</ContactFormLabel>
            <ContactFormField id="message" name="message" as="textarea" />
            <ErrorMessage name="message" component={ErrorText} />

            <ContactFormButton type="submit" disabled={isSubmitting}>
              Submit
            </ContactFormButton>

            {status && <SuccessMessage>{status}</SuccessMessage>}
          </ContactFormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
