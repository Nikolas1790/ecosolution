import sprite from '../../img/sprite.svg';
import { LogoContainer, LogoSvg, MainText, MainTextSpan, MainTitle } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer >
      <LogoSvg >
        <use href={`${sprite}#icon-logo`} />
      </LogoSvg>
      <MainTitle>ecosolution</MainTitle>
      <MainText><MainTextSpan>GREEN</MainTextSpan>ERGY FOR LIFE</MainText>
    </LogoContainer>
  );
};
