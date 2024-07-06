import color from 'common/GlobalColors';
import styled from 'styled-components';

export const ContactUsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 130px;
  height: 39px;
  border-radius: 500px;
  padding: 10px 16px;
  background: ${color.greenLight};
  width: ${({ width }) => width || '100%'};

  transition: all 0.3s linear;
  &:hover  {
    color: ${color.greenLight};
    background: ${color.greenPrimary};
    fill: ${color.greenLight};
    stroke: ${color.greenPrimary};
  }

  @media (max-width: 768px) {
    display:  ${({ width }) => width === '140px' ? 'none' : 'flex'};;
  }
`;