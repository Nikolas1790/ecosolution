import React, { useState } from 'react';
import {  TitleSection } from "common/GiobalStyles";
import { Button, CasesSection, NavButtons, SlideInfo, SlideInfoSpan, UpperBlock } from "./Cases.styled";
import sprite from '../../img/sprite.svg';


import { CasesSlideImg } from 'components/CasesSlidImg/CasesSlidImg';

export const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.createRef();


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 480, // настройки для экранов меньше 768px
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
    <CasesSection >
      <TitleSection>Successful cases of our company</TitleSection>
      <div>
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
        
        <CasesSlideImg sliderRef ={sliderRef} settings={settings}/>
        {/* <SliderWrapper>
          <Slider ref={sliderRef} {...settings}>
            <Card>
              <img src={lvivWindGenerator} alt='Private Enterprise "ZAKHIDNYI BUH" ' />
              <div>
                <div>
                  <h4></h4>
                  <svg width={66} height={66}>
                    <use href={`${sprite}#icon-arrow-right-slider`} />
                  </svg>
                </div>
                <HorizontalLine />
                <p></p>
                <p></p>
              </div>
            </Card>
            <Card>Card 2</Card>
            <Card>Card 3</Card>
            <Card>Card 4</Card>
            <Card>Card 5</Card>
          </Slider>
        </SliderWrapper> */}
      </div>
    </CasesSection>
  );
};
