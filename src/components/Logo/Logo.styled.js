import color from 'common/GlobalColors';
import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover h2 {
    color: ${color.greenLight};
  }
`;

export const LogoSvg = styled.svg`
  width: 31px;
  height: 18px;
  transform: translateY(1px);
`;

export const MainTitle = styled.h2`
font-family: 'All Round Gothic Thick', sans-serif;
  font-size: 33px;
  font-weight: 500;
  line-height: 1.21;
  letter-spacing: -1.32px;
  margin: 0;

  transition: color 0.3s linear;
`;

export const MainText = styled.p`
  font-family: 'CA Saygon Text', sans-serif;
  width: 60px;
  font-size: 10px;
  line-height: 0.9;
  letter-spacing: -0.4px; 
  margin: 0;


  padding-top: 6px; 
`;

export const MainTextSpan = styled.span`
 color: ${color.greenLight};
`;