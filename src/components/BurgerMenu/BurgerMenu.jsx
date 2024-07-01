import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { BurgerButton, BurgerSvg, BurgerSvgWrapper, ModalContent } from './BurgerMenu.styled';
import sprite from '../../img/sprite.svg';


export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerButton onClick={toggleModal}>
        <BurgerSvgWrapper>
          <BurgerSvg>
            <use href={`${sprite}#icon-menu`} />
          </BurgerSvg>
        </BurgerSvgWrapper>
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
