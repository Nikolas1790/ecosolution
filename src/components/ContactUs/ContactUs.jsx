import { ConnectionBlockLink, TitleSection } from "common/GiobalStyles";
import {  ContactContent, ContactInf, ContactInfo, ContactUsSection, ContacttTitle, CotialSvgBlock } from "./ContactUs.styled";
import sprite from '../../img/sprite.svg';
import {ContactForm} from "components/ContactForm/ContactForm";
import { FacebookLink, InstagramLink } from "components/Utils/utils";

export const ContactUs = () => {
  return (
    <ContactUsSection id="contact us" >
      <TitleSection>Contact us</TitleSection>

      <ContactContent>
        <ContactInfo>
          <div>
            <ContacttTitle>Phone:</ContacttTitle>
            <ConnectionBlockLink href="tel:+380981234567">
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-call`} />
              </svg>
              <ContactInf>
                38 (098) 12 34 567
              </ContactInf>
            </ConnectionBlockLink>
            <ConnectionBlockLink  href="tel:+380931234567">
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-call`} />
              </svg>
              <ContactInf>
                38 (093) 12 34 567
              </ContactInf>
            </ConnectionBlockLink>
          </div>

          <div>
            <ContacttTitle>E-mail:</ContacttTitle>
            <ConnectionBlockLink href="mailto:office@ecosolution.com">
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-sms`} />
              </svg>
              <ContactInf>
                office@ecosolution.com
              </ContactInf>
            </ConnectionBlockLink>
          </div>
          <div>
            <ContacttTitle>Address:</ContacttTitle>
            <ConnectionBlockLink href="https://www.google.com/maps/search/?api=1&query=79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7" target="_blank" rel="noopener noreferrer">
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-map`} />
              </svg>
              <ContactInf>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactInf>
            </ConnectionBlockLink>
          </div>
          <div>
            <ContacttTitle>Social Networks:</ContacttTitle>
            <CotialSvgBlock>
              <FacebookLink />
              <InstagramLink />            
            </CotialSvgBlock>
          </div>
        </ContactInfo>

        <ContactForm />  
      </ContactContent>    
    </ContactUsSection>
  );
};