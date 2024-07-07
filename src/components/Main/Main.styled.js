import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;
  margin-top: 198px;

  @media (min-width: 768px) {
    margin-top: 202px;
  }

  @media (min-width: 1280px) {
    align-items: start;
    margin-top: 232px;
  } 
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  width: 320px;
  
  @media (min-width: 768px) {
    font-size: 48px;
    width: 220px;
  }
  @media (min-width: 1280px) {
    font-size: 64px;
    width: 485px;
  } 
`;

export const MainContextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 145px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 296px;
  } 
`;

export const TextBtnBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    align-items: start;    
    gap: 42px;
    width: 342px;
  }
  @media (min-width: 1280px) {
    gap: 20px;
    width: 363px;
  } 
`;

export const MainText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: -0.63px;
  text-align: justify;
`;
