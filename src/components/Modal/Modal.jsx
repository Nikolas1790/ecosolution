import { ModalOverlay } from './Modal.styled';

export const Modal = ({ children }) => {
  return (
    <ModalOverlay>
      {children}
    </ModalOverlay>
  );
};