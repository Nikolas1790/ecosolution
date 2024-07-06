import { HorizontalLine, TitleSection } from "common/GiobalStyles";
import { AddMinusSvg, AllQuestionsBlock, Answer, AnswersBlock,  FAQSection, QuestionBlock, QuestionTitle, QuestionToContact, ToContactBlock } from "./FAQ.styled";
import React, { useState } from "react";
import { faqData, scrollToSection } from "components/Utils/utils";
import sprite from '../../img/sprite.svg';
import LightGreenBtn from "components/Btns/LightGreenBtn/LightGreenBtn";

export const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const handleToggle = (id) => {
    setActiveQuestion(prev => (prev === id ? null : id));
  };

  const handleLearnMoreClick = () => {
    scrollToSection("contact us");
  };
  return (
    <FAQSection id="faq"   >
      <TitleSection width='264px'>Frequently Asked Questions</TitleSection>
      <AllQuestionsBlock>
        <AnswersBlock>
          <HorizontalLine />
          {faqData.map(({ id, question, answer }) => (
            <React.Fragment key={id}>
              <QuestionBlock>
                <QuestionTitle onClick={() => handleToggle(id)}>                
                  <AddMinusSvg width={16} >
                    <use href={`${sprite}#icon-${activeQuestion === id ? 'minus' : 'add'}`} />
                  </AddMinusSvg>             
                  {question}
                </QuestionTitle>
                {activeQuestion === id && <Answer>{answer}</Answer>}
              </QuestionBlock>
              {id !== faqData.length && <HorizontalLine />}
            </React.Fragment>
          ))}
        </AnswersBlock>
     
        <ToContactBlock>
          <QuestionToContact>Didn't find the answer to your question? </QuestionToContact>
          <LightGreenBtn label='Contact Us' width='130px' onClick={handleLearnMoreClick} />
        </ToContactBlock>
      </AllQuestionsBlock>
      
    </FAQSection>
  );
};
