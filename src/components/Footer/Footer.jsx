import { Logo } from "components/Logo/Logo";
import { FooterSection, LogoNavContainer, RequisitesContainer, SocialNetworkContainer, TopNavBtn } from "./Footer.styled";
import sprite from '../../img/sprite.svg';
import { FacebookLink, InstagramLink, scrollToSection } from "components/Utils/utils";

export const Footer = () => {
  const handleLearnMoreClick = () => {
    scrollToSection("main");
  };
  return (
    <FooterSection >
      <LogoNavContainer>
        <Logo />
        <TopNavBtn  onClick={handleLearnMoreClick} >
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-arrow-top-nav`} />
          </svg>
        </TopNavBtn>
      </LogoNavContainer>

      <SocialNetworkContainer>
        <FacebookLink />
        <InstagramLink />
      </SocialNetworkContainer>
      
      <RequisitesContainer>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p>office@ecosolution.com</p>
        <p>ecosolution © 2023</p>
      </RequisitesContainer>
    </FooterSection>
  );
};
