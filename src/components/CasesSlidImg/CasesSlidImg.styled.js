import color from 'common/GlobalColors';
import styled from 'styled-components';


export const SliderWrapper = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 320px;
  height: 318px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.greyLight};
  /* border: 1px solid #ccc; */
  flex-shrink: 0; /* Предотвращение сжатия карточек */
`;


export const CardContentBlock = styled.div`
  padding: 24px 12px 12px 12px;
`;

export const CardMainInfBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;


`;


export const CardTitle = styled.h4`
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -0.72px;
  width: 175px;
`;

export const CardSvgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%; 
  background: ${color.greenLight };

  stroke: ${color.greenPrimary}; 
  fill: transparent;
`;

export const CardSignature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  letter-spacing: -0.48px;
  margin-top: 12px;
`;