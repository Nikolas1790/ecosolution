import { AboutSection, AboutShortValues, AboutText, VerticalLine } from "./About.styled";
import { CompanyValues } from "../CompanyValues/CompanyValues";
import { TitleSection } from "common/GiobalStyles";

import windGeneratorMob from '../../img/Main/main-mob.jpg';
import windGeneratorPlansh from '../../img/Main/main-planshet.jpg';
import windGeneratorDesc from '../../img/Main/main-desctop.jpg';

export const About = () => {
  return (
    <AboutSection id="about" >
      <picture>
        <source srcSet={windGeneratorDesc} media="(min-width: 1280px)" />
        <source srcSet={windGeneratorPlansh} media="(min-width: 768px)" />
        <img src={windGeneratorMob} alt="wind generator" />
      </picture>

      <AboutShortValues>
        <TitleSection>Main values of our company</TitleSection>
        <VerticalLine />
        <AboutText>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</AboutText>
      </AboutShortValues>

      <CompanyValues />
    </AboutSection>
  );
};
