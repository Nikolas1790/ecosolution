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



// export const AddressBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   gap: 8px;
//   width: 100%;
//   letter-spacing: -0.64px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     margin-top: -8px;
//   }

//   @media (min-width: 1280px) {
//     margin-top: -12px;
//   } 
// `;

// export const Address = styled.p`
// `;

// export const Email = styled.p`
//   @media (min-width: 768px) {
//     margin-left: 28px;
//   }
//   @media (min-width: 1280px) {
//     margin-left: 330px;
//   } 
  
// `;

// export const Copyright = styled.p`
//   display: none;

//   @media (min-width: 768px) {
//     display: block;
//   }
// `;

