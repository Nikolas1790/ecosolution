import styled from 'styled-components';

export const ContactUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 36px 0;

  @media (min-width: 768px) {
    gap: 40px;
    padding: 100px 0;
  }
  @media (min-width: 1280px) {
    gap: 120px;
    padding: 120px 0;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    
  }
`;











export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: 768px) {
    width: 244px;
  }

  @media (min-width: 1280px) {
    gap: 32px;
    width: 476px;
  }
`;

export const ContactItem = styled.div`
  /* padding: 16px; */

`;

export const ContacttTitle = styled.h4`
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: -0.64px;
  margin-bottom: 8px;

  @media (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const ContactInf = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  width: 212px;

  @media (min-width: 1280px) {
    font-size: 24px;
    width: 440px;
  }

`;

export const CotialSvgBlock = styled.div`
  display: flex;
  gap: 32px;
  padding: 12px;

  @media (min-width: 1280px) {
    gap: 8px;
    padding: 0px;
  }
`;