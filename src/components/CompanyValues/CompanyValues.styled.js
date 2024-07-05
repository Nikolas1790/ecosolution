import color from 'common/GlobalColors';
import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px; 
`;

export const GridItem = styled.li`

display: grid;
  grid-template-rows: auto 1fr auto; /* Распределение по строкам */
  gap: 12px; 
  background: ${color.greyLight};
  padding: 12px;
`;


export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Иконка и контент */
  gap: 8px; 
  align-items: center; 
  fill: transparent;
  stroke: ${color.greenPrimary};
  margin-bottom: 33px;
`;

export const ContentTitle = styled.h4`
font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
`;

export const ContentText = styled.p`
  font-size: 14px;
  line-height: 1.2;
  text-align: justify;
`;