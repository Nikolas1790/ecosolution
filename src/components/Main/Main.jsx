import { scrollToSection } from "components/Utils/utils";
import { MainContextBlock, MainSection, MainText, MainTitle, TextBtnBlock } from "./Main.styled";
import CuStomBtn from "components/Btns/CustomBtn/CustomBtn";
import { HorizontalLine } from "common/GiobalStyles";
import { Address } from "components/Address/Address";

export const Main = () => {
  const handleLearnMoreClick = () => {
    scrollToSection("cases");
  };
  return (
    <MainSection id="main" >
      <MainContextBlock>
        <MainTitle> RENEWABLE ENERGY FOR ANY TASK </MainTitle>
        <TextBtnBlock>
          <MainText>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</MainText>
          <CuStomBtn label='Learn more' width='141px' onClick={handleLearnMoreClick} />
        </TextBtnBlock>
      </MainContextBlock>

      <HorizontalLine />
      <Address />
    </MainSection>
  );
};
