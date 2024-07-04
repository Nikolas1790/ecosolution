import styled from 'styled-components';
import color from 'common/GlobalColors';
import { ErrorMessage, Field } from 'formik';

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 559px;
  background: ${color.greyLight};
  padding: 36px 12px;
`;

export const FormFieldBlock = styled.div`
  position: relative;
  width: 296px;
`;

export const ContactFormField = styled(Field)`
  font-size: 18px;
  border: none;
  margin-bottom: 28px;
  background: transparent;
  padding-bottom: 8px;
  width: 296px;
  height: ${({ height}) => height || 'auto'};

  border-bottom: 2px solid ${({ error }) => (error ? 'red' : color.greenLight)};
  &:focus {
    outline: none;
    border-bottom-color: ${({ error }) => (error ? 'red' : color.greenLight)};
  }
  /* textarea {
    padding-bottom: 0; 
    resize: none; 
    width: 100%;
    min-height: ${({ height }) => height || 'auto'};
    
  } */
`;
export const ErrorMessageFormField = styled(ErrorMessage)`
  position: absolute;
  z-index: 1;
  top: 36px;
  right: 0px;
`;

export const ContactFormLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  margin-bottom:8px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

// export const SuccessMessage = styled.div`
//   color: green;
//   font-size: 14px;
//   margin-top: 16px;
// `;
