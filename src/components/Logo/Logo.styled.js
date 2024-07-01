import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover h2 {
    color: rgb(151, 210, 139);
  }
`;

export const LogoSvg = styled.svg`
  width: 31px;
  height: 18px;
  padding-top: 8px; 
`;

export const MainTitle = styled.h2`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.21;
  letter-spacing: -1.32px;
  margin: 0;

  transition: color 0.3s linear;
`;

export const MainText = styled.p`
  width: 60px;
  font-size: 10px;
  line-height: 0.9;
  letter-spacing: -0.4px; // 10×0.04=0.4px
  margin: 0;


  padding-top: 10px; 
`;

export const MainTextSpan = styled.span`
 color: rgb(151, 210, 139);
`;