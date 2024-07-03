import styled from 'styled-components';

export const CasesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px 0;
`;


export const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SlideInfo = styled.div`
  font-size: 16px;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #000;
  padding: 8px;
  cursor: pointer;
`;

export const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  border: 1px solid #ccc;
`;
