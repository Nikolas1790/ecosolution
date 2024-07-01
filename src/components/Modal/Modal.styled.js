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
  /* width:100%;
  height:100%; */
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
