import color from 'common/GlobalColors';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(23, 61, 51, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  /* width:100%; */
  /* height:100%; */
`;

export const ModalWrapper = styled.div`
    width: calc(100% - 40px);
  height: calc(100% - 66px); /* 36px сверху + 30px снизу */
  margin-top: 36px;
  background: rgba(23, 61, 51, 0.75);
  padding: 24px;
  border-radius: 25px;
  box-sizing: border-box;
  overflow: auto;
  position: relative;
`;


export const ModalContent = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 66px); /* 36px сверху + 30px снизу */
  margin-top: 36px;
  background: rgba(23, 61, 51, 0.75);
  padding: 24px;
  border-radius: 25px;
  box-sizing: border-box;
  overflow: auto;
  position: relative;
  

`;

export const Close = styled.button`
  display: flex;
  font-size: 16px;
  line-height: 1.19;
  color: ${color.white};
  margin-bottom: 6px;
  stroke: ${color.white};

  transition: all 0.3s linear;
  &:hover{
    color: ${color.greenLight};
    stroke: ${color.greenLight};
  }

`;

export const ChapterBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const Chapter = styled.li`
  display: flex;
  gap: 8px;
  font-size: 18px;
  color: ${color.whiteSemiTransparent};
  
  fill: transparent;
  stroke: ${color.whiteSemiTransparent};
  cursor: pointer;

  &:first-child {
    color: ${color.greenLight};
    stroke: ${color.greenLight}; 
  }

  transition: all 0.3s linear;
  &:hover{
    color: ${color.white};
    stroke: ${color.white};
  }
`;

export const SotialContent = styled.div`
  display: flex;
  gap: 8px;

  position: absolute;
  bottom: 24px;
  left: 24px;
`;