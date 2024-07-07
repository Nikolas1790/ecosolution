import color from 'common/GlobalColors';
import styled from 'styled-components';

export const CasesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 36px 0;

  @media (min-width: 480px) {
    width: 440px;
  }

  @media (min-width: 768px) {
    gap: 32px;
    padding: 100px 0;
    width: 708px;
  }

  @media (min-width: 1280px) {
    gap: 115px;
    padding: 120px 0;
    width: 1240px;
  }
`;

export const CarouselBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 768px) {
    gap: 126px;
  }
  @media (min-width: 1280px) {
    gap: 193px;
  }
`;

export const CasesVerticalLine = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0px;
    left: 352px;

    width: 1px;
    height: 65px;
    background: ${color.greenLight};
  }

  @media (min-width: 1280px) {
    left: 620px;
    height: 96px;
  }
`;

export const SlideInfo = styled.p`
  font-size: 28px;
  font-weight: 300;
  line-height: 1.21;
  letter-spacing: -1.12px;
  color: ${color.greenPrimary};
`;

export const SlideInfoSpan = styled.span`
  color: ${color.greenPrimaryQuarterTransparency};
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 12px;

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Button = styled.button`
  background: none;
  cursor: pointer;
  fill: transparent;
  stroke: ${color.greenPrimary};

  transition: stroke 0.3s linear;
  &:hover {
    stroke: ${color.greenLight}; 
  }
`;

export const SlideSVG = styled.svg`
  width: 66px;
  height: 66px;

  @media (min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;