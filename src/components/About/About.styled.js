import color from 'common/GlobalColors';
import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 36px;
  padding: 36px 0;

  picture {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  
  @media (min-width: 768px) {
    gap: 100px;
    padding: 40px 0 100px;
  }

  @media (min-width: 1280px) {
    gap: 123px;
    padding: 36px 0 120px;
  } 
`;

export const AboutShortValues = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
  }

  @media (min-width: 1280px) {
    gap: 416px;
  } 
`;

export const VerticalLine = styled.div`
  display: none;


  @media (min-width: 768px) {
    position: absolute;
    display: block;
    top: 4px;
    left: 364px;
    width: 1px ;
    height: 110px;
    background: ${ color.greenLight};
  }

  @media (min-width: 1280px) {
    top: 4px;
    left: 616px;
    height: 87px;
  } 
`;


export const AboutText = styled.p`
  /* letter-spacing: -0.64px; */
  text-align: justify;
  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1280px) {
    width: 459px;
  } 
`;