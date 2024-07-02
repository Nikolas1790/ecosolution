import color from 'common/GlobalColors';
import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Два столбца */
  gap: 24px; /* Отступы между блоками */
`;

export const GridItem = styled.li`

display: grid;
  grid-template-rows: auto 1fr auto; /* Распределение по строкам */
  gap: 12px; /* Отступы между блоками внутри GridItem */
  background: ${color.greyLight};
  padding: 12px;
`;


export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Иконка и контент */
  gap: 8px; /* Отступы между элементами внутри контента */
  align-items: center; /* Выравнивание элементов по центру */
  fill: transparent;
  stroke: ${color.greenPrimary};
  margin-bottom: 33px;
`;

export const ContentTitle = styled.h4`
font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  /* letter-spacing: 0px; */
  text-transform: uppercase;
`;