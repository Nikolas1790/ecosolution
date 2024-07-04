import styled from 'styled-components';
import color from 'common/GlobalColors';
import { Field } from 'formik';

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactFormField = styled(Field)`
  padding: 8px;
  border: 1px solid ${color.greenPrimary};
  border-radius: 4px;
`;

export const ContactFormLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
`;

export const ContactFormButton = styled.button`
  padding: 8px 16px;
  background-color: ${color.greenPrimary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: ${color.greenLight};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

export const SuccessMessage = styled.div`
  color: green;
  font-size: 14px;
  margin-top: 16px;
`;
