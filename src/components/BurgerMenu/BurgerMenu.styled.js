import color from 'common/GlobalColors';
import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px; 
  background: ${color.greySuperLight};
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  padding: 0;

  transition: background 0.3s linear;
  &:hover,
  &:focus  {
    background: ${color.greenLight};    
  }
`;

export const BurgerSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  transition: background 0.3s linear;
`;

export const BurgerSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #292D32;

  transition: background 0.3s linear;
`;
