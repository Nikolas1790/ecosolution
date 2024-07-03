import color from 'common/GlobalColors';
import styled from 'styled-components';

export const ElectricityContainer = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;
export const ElectricityTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  background: ${color.greenLight};

`;

export const KWT = styled.h4`
display: flex;
align-items: center;
gap: 8px;
  color:  ${color.greenLight};
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
`;

export const KWTSpan = styled.span`
  color:  ${color.greenPrimary};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
`;


