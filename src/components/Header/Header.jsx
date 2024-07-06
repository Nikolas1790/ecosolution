import React, { useState, useEffect } from 'react';
import { Logo } from "components/Logo/Logo";
import { HeaderContainer, HeaderContent, HeaderNavContent } from "./Header.styled";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";
import { scrollToSection } from 'components/Utils/utils';
import LightGreenBtn from 'components/Btns/LightGreenBtn/LightGreenBtn';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLearnMoreClick = () => {
    scrollToSection("contact us");
  };

  return (
    <HeaderContainer scrolled={scrolled ? 'true' : ''}>
      <HeaderContent>
        <Logo />
        <HeaderNavContent>
          <BurgerMenu />
          <LightGreenBtn label='Get in touch' width='140px' h onClick={handleLearnMoreClick} />
        </HeaderNavContent>
      </HeaderContent>
    </HeaderContainer>
  );
};
