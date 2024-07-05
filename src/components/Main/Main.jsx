import { scrollToSection } from "components/Utils/utils";
import { HorizontalLine,  MainSection, MainText, MainTitle } from "./Main.styled";
import CuStomBtn from "components/CustomBtn/CustomBtn";

export const Main = () => {
  const handleLearnMoreClick = () => {
    scrollToSection("cases");
  };
  return (
    <MainSection id="main" >
      <MainTitle> RENEWABLE ENERGY FOR ANY TASK </MainTitle>
      <MainText>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</MainText>
 
      <CuStomBtn label='Learn more' width='141px' onClick={handleLearnMoreClick} />
      <HorizontalLine />
    </MainSection>
  );
};
