import color from 'common/GlobalColors';
import styled from 'styled-components';

export const ElectricityContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ElectricityTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;
  width: 286px;

  @media (min-width: 768px) {
    font-size: 36px;
    width: 368px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
    width: 491px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  background: ${color.greenLight};

  @media (min-width: 768px) {
    height: 87px;
  }
`;

export const KWT = styled.h4`
  display: flex;
  align-items: center;
  gap: 8px;
  color:  ${color.greenLight};
  font-size: 48px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    gap: 24px;
    font-size: 100px;
  }
  @media (min-width: 1280px) {
    gap: 24px;
    font-size: 164px;
  }
`;

export const KWTSpan = styled.span`
  color:  ${color.greenPrimary};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;
