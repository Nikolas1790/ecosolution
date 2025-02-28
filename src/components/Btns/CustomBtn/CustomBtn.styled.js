import color from 'common/GlobalColors'
import styled from 'styled-components'

export const CuctomBtnGreen = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: ${({ width }) => width || '100%'};
  width: 141px;
  height: 39px;
  border: 1px solid ${color.greenLight};
  border-radius: 500px;
  padding: 4px 4px 4px 16px;

  margin-left: ${({ width }) => width==="99px" ? 'auto' : 'none'};
  margin-top: ${({ width }) => width==="99px" ? '16px' : 'none'};

  transition: all 0.3s linear;
  &:hover,
  &:focus  {
    color: ${color.greenLight};
    background: ${color.greenPrimary};
  }

  @media (min-width: 1280px) {
    margin-top: ${({ width }) => width==="99px" ? '34px' : 'none'};
  }
`;
