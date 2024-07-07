import color from 'common/GlobalColors';
import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px; 

  @media (min-width: 768px) {
    grid-template-columns:   repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }

  @media (min-width: 1280px) {
    gap: 48px;
  }
`;

export const GridItem = styled.li`
  min-height: 197px;
  display: grid;
  grid-template-rows: auto 1fr auto; 
  background: ${color.greyLight};
  padding: 12px;


  @media (min-width: 768px) {    
  &:nth-child(1){
    grid-area: 1 / 1 / 2 / 2;
  }
  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }


  &:nth-child(5) {
    grid-area: 2 / 3 / 2 / 3;
  }
  &:nth-child(6){
    grid-area: 2 / 4 / 4 / 4;
  }
  }

  @media (min-width: 1280px) {
    height: 340px;
    padding: 48px 24px;
  }

`;
export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    &:nth-child(3) {
      grid-area: 1 / 3 / 1 / 5;
    }

    &:nth-child(4) {
      grid-area: 2 / 1 / 3 / 3;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;



export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Иконка и контент */
  gap: 8px; 
  align-items: center; 
  fill: transparent;
  stroke: ${color.greenPrimary};
  margin-bottom: 33px;

  @media (min-width: 768px) {    
    margin-bottom: 51px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 94px;
  }
`;

export const ContentTitleSVG = styled.svg`
  width: 16px;
  height: 16px;


  @media (min-width: 1280px) {
    width: 24px;
  height: 24px;
  }

`;

export const ContentTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;

  @media (min-width: 768px) {    
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
  }

`;

export const ContentText = styled.p`
  font-size: 14px;
  line-height: 1.2;
  text-align: justify;
  margin-top: 12px;

  @media (min-width: 1280px) {
    font-size: 16px;
    margin-top: 24px;
  }
`;
