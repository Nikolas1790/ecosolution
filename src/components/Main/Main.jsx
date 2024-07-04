import { HorizontalLine,  MainSection, MainText, MainTitle } from "./Main.styled";
// import sprite from '../../img/sprite.svg';
import CuStomBtn from "components/CustomBtn/CustomBtn";


export const Main = () => {
  return (
    <MainSection >
      <MainTitle> RENEWABLE ENERGY FOR ANY TASK </MainTitle>
      <MainText>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</MainText>
      {/* <LearnMoreBtb>
        Learn more
        <svg width={32} height={32}>
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </LearnMoreBtb> */}
      <CuStomBtn label='Learn more' width='141px' />
      <HorizontalLine />
    </MainSection>
  );
};
