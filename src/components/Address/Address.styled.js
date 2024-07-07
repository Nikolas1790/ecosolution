import styled from 'styled-components';

export const AddressBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: -8px;
  }
  @media (min-width: 1280px) {
    margin-top: -12px;
  } 
`;

export const Email = styled.p`
  @media (min-width: 768px) {
    margin-left: 28px;
  }
  @media (min-width: 1280px) {
    margin-left: 330px;
  }   
`;

export const Copyright = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

