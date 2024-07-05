import styled from 'styled-components';

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px; 
  background: rgb(220, 239, 216);
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  padding: 0;

  :hover {
    background: rgb(151, 210, 139);
    
  }
`;

export const BurgerSvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  transition: background 0.3s linear;
`;

export const BurgerSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #292D32;

  transition: background 0.3s linear;
`;

// export const ModalContent = styled.div`
//   width: calc(100% - 40px);
//   height: calc(100% - 66px); /* 36px сверху + 30px снизу */
//   margin-top: 36px;
//   background: rgba(23, 61, 51, 0.75);
//   padding: 24px;
//   border-radius: 25px;
//   box-sizing: border-box;
//   overflow: auto;
//   position: relative;
  

// `;


