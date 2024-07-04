import { TitleSection } from "common/GiobalStyles";
import { ConnectionBlock, ContactInf, ContactInfo, ContactItem, ContactUsSection, ContacttTitle, CotialSvgBlock } from "./ContactUs.styled";
import sprite from '../../img/sprite.svg';
import ContactForm from "components/ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <ContactUsSection >
      <TitleSection>Contact us</TitleSection>
      <ContactInfo>
        <ContactItem>
          <ContacttTitle>Phone:</ContacttTitle>
          <ConnectionBlock href="tel:+380981234567">
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-call`} />
            </svg>
            <ContactInf>
              38 (098) 12 34 567
            </ContactInf>
          </ConnectionBlock>
          <ConnectionBlock  href="tel:+380931234567">
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-call`} />
            </svg>
            <ContactInf>
              38 (093) 12 34 567
            </ContactInf>
          </ConnectionBlock>
        </ContactItem>

        <ContactItem>
          <ContacttTitle>E-mail:</ContacttTitle>
          <ConnectionBlock href="mailto:office@ecosolution.com">
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-sms`} />
            </svg>
            <ContactInf>
              office@ecosolution.com
            </ContactInf>
          </ConnectionBlock>
        </ContactItem>
        <ContactItem>
          <ContacttTitle>Address:</ContacttTitle>
          <ConnectionBlock href="https://www.google.com/maps/search/?api=1&query=79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7" target="_blank" rel="noopener noreferrer">
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-map`} />
            </svg>
            <ContactInf>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </ContactInf>
          </ConnectionBlock>
        </ContactItem>
        <ContactItem>
          <ContacttTitle>Social Networks:</ContacttTitle>
          <CotialSvgBlock>
            <ConnectionBlock href="https://facebook.com">
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-facebook`} />
              </svg>
            </ConnectionBlock>
            <ConnectionBlock href="https://twitter.com">
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-instagram`} />
              </svg>
            </ConnectionBlock>
          </CotialSvgBlock>
        </ContactItem>
      </ContactInfo>

      <ContactForm />
      
    </ContactUsSection>
  );
};
