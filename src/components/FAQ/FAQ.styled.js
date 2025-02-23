import styled from 'styled-components';

export const FAQSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  @media (min-width: 1280px) {
    gap: 185px;
  }
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

  @media (min-width: 768px) {
    padding: 0px;
    width: 342px;
  }
  @media (min-width: 1280px) {
    gap: 24px;
    width: 596px;
  }
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

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Answer = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.21;
  letter-spacing: -0.56;
  text-align: justify;

  margin-top: 16px;
  padding-left: 24px;
  @media (min-width: 768px) {
    padding-left: 44px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    padding-left: 52px;
  }
`;

export const AddMinusSvg = styled.svg`
  min-width: 16px;
  height: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    min-width: 28px;
    height: 28px;
    margin-right: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    margin-right: 24px;
  }
`;

export const ToContactBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    position: absolute;
    right: 44px;
    bottom: 4px;
  }
`;

export const QuestionToContact = styled.p`
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: -0.72px;
  margin-bottom: 12px;

  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;