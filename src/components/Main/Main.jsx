import { HorizontalLine, LearnMoreBtb, MainSection, MainText, MainTitle } from "./Main.styled";
import sprite from '../../img/sprite.svg';


export const Main = () => {
  return (
    <MainSection >
      <MainTitle> RENEWABLE ENERGY FOR ANY TASK </MainTitle>
      <MainText>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</MainText>
      <LearnMoreBtb>
        Learn more
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </LearnMoreBtb>

      <HorizontalLine />
    </MainSection>
  );
};
