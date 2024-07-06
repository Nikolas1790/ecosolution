import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DataContainer = styled.div`
  width: 100%;
  padding: 24px 20px;
  box-sizing: border-box;
  max-width: 100%;

  @media (min-width: 480px) {
    max-width: 480px;
    }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 40px 30px; 
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding: 40px 20px; 
  } 
`;