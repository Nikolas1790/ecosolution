import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { BurgerButton, ModalContent } from './BurgerMenu.styled';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerButton onClick={toggleModal}>
        ☰
      </BurgerButton>
      {isOpen && (
        <Modal>
          <ModalContent>
            <div>ddddddddddddddddddddddddddddddddd</div>
            <button onClick={toggleModal}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
