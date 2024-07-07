import { Logo } from "components/Logo/Logo";
import { FooterSection, LogoNavContainer, SocialNetworkContainer, TopNavBtn } from "./Footer.styled";
import sprite from '../../img/sprite.svg';
import { FacebookLink, InstagramLink, scrollToSection } from "components/Utils/utils";
import { Address } from "components/Address/Address";

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


      <Address />
    </FooterSection>
  );
};
