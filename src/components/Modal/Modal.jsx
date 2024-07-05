import { Chapter, ChapterBlock, Close, ModalContent, ModalOverlay, SotialContent } from './Modal.styled';
import sprite from '../../img/sprite.svg';
import { HorizontalLine } from 'common/GiobalStyles';
import { FacebookLink, InstagramLink, scrollToSection } from 'components/Utils/utils';

const chapter = ["Main", "About", "Cases", "FAQ", "Contact Us" ];

export const Modal = ({ toggleModal }) => {

  // Close modal and scroll to section on menu item click
  const handleChapterClick = (sectionId) => {
    toggleModal(); 
    console.log(sectionId)
    scrollToSection(sectionId); // Then scroll to section
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Close onClick={toggleModal}>
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-close`} />
          </svg>
          close
        </Close>
        <HorizontalLine component='burger'/>

        <ChapterBlock>
          {chapter.map((word, index) => (
            <Chapter key={index} onClick={() => handleChapterClick(word.toLowerCase())} >
              {word}
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-arrow-right-top`} />
              </svg>
            </Chapter>
          ))}
        </ChapterBlock>

        <SotialContent>
          <FacebookLink component='burger'/>
          <InstagramLink component='burger'/>
        </SotialContent>

      </ModalContent>
    </ModalOverlay>
  );
};