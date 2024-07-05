import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;
  padding-top: 130px;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
`;

export const MainText = styled.p`
  font-size: 16px;
font-weight: 400;
line-height: 1.19;
letter-spacing: -0.63px;
text-align: justify;
`;


export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(151, 210, 139);

`;