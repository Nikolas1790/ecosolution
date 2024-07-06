import React, { useState } from 'react';
import {  TitleSection } from "common/GiobalStyles";
import { Button, CarouselBlock, CasesSection, CasesVerticalLine, NavButtons, SlideInfo, SlideInfoSpan, UpperBlock } from "./Cases.styled";
import sprite from '../../img/sprite.svg';

import { CasesSlideImg } from 'components/CasesSlidImg/CasesSlidImg';

export const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.createRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: '24px', 
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '24px' 
        }
      },
      {
        breakpoint: 767, // настройки для экранов меньше 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <CasesSection id="cases" >
      <CarouselBlock>
        <TitleSection width='264px'>Successful cases of our company</TitleSection>

        <UpperBlock>
          <SlideInfo>
            {String(currentSlide + 1).padStart(2, '0')}
             <SlideInfoSpan> / 05</SlideInfoSpan>
          </SlideInfo>
          <NavButtons>
            <Button onClick={prevSlide}>
            <svg width={66} height={66}>
              <use href={`${sprite}#icon-arrow-left-slider`} />
            </svg>
            </Button>
            <Button onClick={nextSlide}>
            <svg width={66} height={66}>
              <use href={`${sprite}#icon-arrow-right-slider`} />
            </svg>
            </Button>
          </NavButtons>          
        </UpperBlock>
        <CasesVerticalLine />
      </CarouselBlock>

      <CasesSlideImg sliderRef ={sliderRef} settings={settings}/>       
    </CasesSection>
  );
};
