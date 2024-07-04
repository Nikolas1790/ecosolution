import color from 'common/GlobalColors';
import styled from 'styled-components';


export const FAQSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* padding: 36px 0; */
`;

export const AllQuestionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;


export const AnswersBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 17px 0 36px 0;
`;

export const QuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -0.72px;
  text-align: justify;
  cursor: pointer;
`;

export const Answer = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.21;
  letter-spacing: -0.56;
  text-align: justify;

  margin-top: 16px;
  padding-left: 24px;
`;

export const AddMinusSvg = styled.svg`
  min-width: 16px;
  height: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

`;


export const ContactUsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 130px;
  height: 39px;
  border-radius: 500px;
  padding: 10px 16px;
  background: ${color.greenLight};
  margin-top: 12px;

  transition: all 0.3s linear;
  &:hover  {
    color: ${color.greenLight};
    background: ${color.greenPrimary};
    fill: ${color.greenLight};
    stroke: ${color.greenPrimary};
  }
`;