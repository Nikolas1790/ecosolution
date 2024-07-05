import color from 'common/GlobalColors';
import styled from 'styled-components';

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
`;

export const LogoNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const TopNavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${color.greenLight};

  fill: transparent;
  stroke: ${color.greenPrimary};
  
  transition: all 0.3s linear;
  &:hover{
    background: ${color.greenPrimary};
    stroke: ${color.greenLight};;
  }
`;

export const SocialNetworkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const RequisitesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;