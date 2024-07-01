import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;
  padding-top: 130px;
`;

export const MainTitle = styled.h2`
/* font-family: Oswald; */
  font-size: 36px;
  font-weight: 400;
line-height: 1;
letter-spacing: -3px;
/* margin-bottom: 24px; */
`;

export const MainText = styled.p`
  font-size: 16px;
font-weight: 400;
line-height: 1.18;
letter-spacing: -0.45px;
text-align: justify;
`;

export const LearnMoreBtb = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 141px;
  height: 39px;
  border: 1px solid rgb(151, 210, 139);
  border-radius: 500px;
  padding: 4px 4px 4px 16px;

  transition: all 0.3s linear;
  &:hover  {
    color: rgb(151, 210, 139);
    background: rgb(23, 61, 51)
  }
`;

export const HorizontalLine = styled.div`

  width: 100%;
  height: 1px;
  background: rgb(151, 210, 139);

`;