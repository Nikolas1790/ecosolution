import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Два столбца */
  gap: 24px; /* Отступы между блоками */
`;

export const GridItem = styled.li`
  display: grid;
  gap: 16px; /* Отступы внутри блока */
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Иконка и контент */
  gap: 10px; /* Отступы между элементами внутри контента */
  align-items: center; /* Выравнивание элементов по центру */
`;