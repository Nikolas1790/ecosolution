import color from 'common/GlobalColors';
import styled from 'styled-components';

export const CasesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px 0;
`;

export const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 19px;
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
