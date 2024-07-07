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


  @media (min-width: 768px) {
    width: 342px;
    height: 559px;
    padding: 36px 24px;
  }
  @media (min-width: 1280px) {
    width: 596px;
    height: 623px;
    padding: 48px;
  }
`;

export const FormFieldBlock = styled.div`
  position: relative;
  margin-bottom: 28px;
`;

export const ContactFormField = styled(Field)`
  font-size: 18px;
  border: none;
  background: transparent;
  padding-bottom: 8px;
  width: 296px;
  height: ${({ height}) => height || 'auto'};
  border-bottom: 2px solid ${({ error }) => (error ? 'red' : color.greenLight)};

  &:focus {
    outline: none;
    border-bottom-color: ${({ error }) => (error ? 'red' : color.greenLight)};
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    width: 500px;
  }
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

  @media (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;