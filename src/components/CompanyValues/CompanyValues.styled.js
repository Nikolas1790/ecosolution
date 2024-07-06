import color from 'common/GlobalColors';
import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px; 

  @media (min-width: 768px) {
    grid-template-columns:  1fr 1fr 2fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const GridItem = styled.li`
  min-height: 197px;
  display: grid;
  grid-template-rows: auto 1fr auto; /* Распределение по строкам */
  /* gap: 12px;  */
  background: ${color.greyLight};
  padding: 12px;


  @media (min-width: 768px) {
    &:nth-child(1),
  &:nth-child(2) {
    grid-area: 1 / 1 / 2 / 2;
  }

  &:nth-child(3),
  &:nth-child(4) {
    grid-area: 2 / 2 / 3 / 3;
  }
  }

`;
export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    &:nth-child(3) {
      grid-area: 1 / 2 / 2 / 3;
    }

    &:nth-child(4) {
      grid-area: 2 / 1 / 3 / 2;
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
  margin-top: 12px;
`;











// import color from 'common/GlobalColors';
// import styled from 'styled-components';

// export const GridContainer = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 24px;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-template-rows: repeat(2, 1fr);
//     gap: 24px;
//   }
// `;

// export const GridItem = styled.li`
//   display: grid;
//   gap: 12px;
//   background: ${color.greyLight};
//   padding: 12px;

//   /* @media (min-width: 768px) {
//     &:nth-child(1) {
//       grid-area: 1 / 1 / 2 / 2;
//     }
//     &:nth-child(4) {
//       grid-area: 2 / 2 / 3 / 3;
//     }
//   } */
// `;

// export const ImageContainer = styled.div`
//   display: none;

//   @media (min-width: 768px) {
//     display: block;

//     &:nth-child(2) {
//       grid-area: 1 / 2 / 2 / 3;
//     }

//     &:nth-child(3) {
//       grid-area: 2 / 1 / 3 / 2;
//     }

//     img {
//       width: 100%;
//       height: auto;
//     }
//   }
// `;

// export const GroupContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

// export const ContentWrapper = styled.div`
//   display: grid;
//   grid-template-columns: auto 1fr;
//   gap: 8px;
//   align-items: center;
//   fill: transparent;
//   stroke: ${color.greenPrimary};
//   margin-bottom: 33px;
// `;

// export const ContentTitle = styled.h4`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.5;
//   text-transform: uppercase;
// `;

// export const ContentText = styled.p`
//   font-size: 14px;
//   line-height: 1.2;
//   text-align: justify;
// `;
