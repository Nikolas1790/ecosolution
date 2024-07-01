import { ModalOverlay, ModalWrapper } from './Modal.styled';

export const Modal = ({ children }) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </ModalOverlay>
  );
};