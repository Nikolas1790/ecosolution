import { HorizontalLine, TitleSection } from "common/GiobalStyles";
import { AddMinusSvg, AllQuestionsBlock, Answer, AnswersBlock, ContactUsBtn, FAQSection, QuestionBlock, QuestionTitle } from "./FAQ.styled";
import React, { useState } from "react";
import { faqData, scrollToSection } from "components/Utils/utils";
import sprite from '../../img/sprite.svg';

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
      <TitleSection>Frequently Asked Questions</TitleSection>
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

        <QuestionTitle>Didn't find the answer to your question? </QuestionTitle>


        <ContactUsBtn onClick={handleLearnMoreClick}>
          Contact Us
          <svg width={14} height={14}>
            <use href={`${sprite}#icon-down`} />
          </svg>
        </ContactUsBtn>
      </AllQuestionsBlock>
      
    </FAQSection>
  );
};
