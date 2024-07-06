import color from 'common/GlobalColors';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  width: 100%;

  z-index: 1000;
  background-color: ${({ scrolled }) => (scrolled ? color.white : 'transparent')};
  transition: background-color 0.3s linear;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;

  max-width: 480px;
  padding: 36px 20px; 

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 36px 30px; 
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 24px 20px; 
  } 
`;


export const HeaderNavContent = styled.div`
  display: flex;
  gap: 12px;
`;