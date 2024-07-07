import color from 'common/GlobalColors';
import styled from 'styled-components';

export const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) and (max-width: 1279px) {
      gap: 24px; 
    }
  }
`;

export const CardSvgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%; 
  background: ${color.greenLight };

  stroke: ${color.greenPrimary}; 
  fill: transparent;

  transition: background 0.3s, stroke 0.3s; 
`; 
export const Card = styled.div`
width: 320px;
  height: 318px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.greyLight};
  cursor: pointer;
  flex-shrink: 0; 
  outline: none;

  transition: all 0.3s;
  &:hover {
    ${CardSvgBlock} {
      background: ${color.greenPrimary};
    }

    svg {
      stroke: ${color.greenLight};
      transition-delay: 0.2s; 
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 322px;
    max-width: 342px; 
    margin-right: 24px; 
  }

  @media (min-width: 1280px) {
    width: 596px; 
    height: 506px;
  }
`;

export const CardContentBlock = styled.div`
  padding: 24px 12px 12px 12px;

  @media (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const CardMainInfBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const CardTitle = styled.h4`
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -0.72px;
  width: 175px;
  height: 66px;

  @media (min-width: 768px)  {
    font-size: 20px;
    width: 200px;
    height: 72px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    width: 357px;
    height: 58px;
  }
`;

export const CardSignature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  letter-spacing: -0.48px;
  margin-top: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    margin-top: 24px;
  }
`;