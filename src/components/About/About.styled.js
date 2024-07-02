import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 36px;
  padding: 24px 0 36px 0;
`;


export const AboutAddressBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

export const AboutAddress = styled.p`
  letter-spacing: -0.64px;
`;


export const AboutTitle = styled.h3`
/* font-family: 'Oswald', sans-serif; */
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  /* letter-spacing: 0px; */
  text-transform: uppercase;
`;

export const AboutText = styled.p`
letter-spacing: -0.44px;
text-align: justify;
`;