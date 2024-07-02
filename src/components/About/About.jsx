import { AboutAddress, AboutAddressBlock, AboutSection, AboutText, AboutTitle } from "./About.styled";
import windGenerator from '../../img/Main/main-mob.jpg';
// import sprite from '../../img/sprite.svg';
import { CompanyValues } from "../CompanyValues/CompanyValues";

export const About = () => {
  return (
    <AboutSection >
      <AboutAddressBlock>
        <AboutAddress>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</AboutAddress>
        <AboutAddress>office@ecosolution.com</AboutAddress>
      </AboutAddressBlock>

      <img src={windGenerator} alt="wind generator" />
      
      <>
        <AboutTitle>Main values of our company</AboutTitle>
        <AboutText>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</AboutText>
      </>

      <CompanyValues />


    </AboutSection>
  );
};
