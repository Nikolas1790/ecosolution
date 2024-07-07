import color from 'common/GlobalColors';
import styled from 'styled-components';

export const FooterSection = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;

  @media (min-width: 768px) {
    gap: 16px;
    padding-top: 40px;
  }
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

  @media (min-width: 768px) {
    position: absolute;
    top: 48px;
    right: 286px;
  }

  @media (min-width: 1280px) {
    right: 400px;
  }
`;

