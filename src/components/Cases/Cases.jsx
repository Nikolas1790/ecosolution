import React, { useState } from 'react';
import Slider from 'react-slick';
import { TitleSection } from "common/GiobalStyles";
import { Button, Card, CasesSection, NavButtons, SlideInfo, SlideInfoSpan, SliderWrapper, UpperBlock } from "./Cases.styled";
import sprite from '../../img/sprite.svg';


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
            <use href={`${sprite}#icon-arrow-left-l`} />
          </svg>
          </Button>
          <Button onClick={nextSlide}>
          <svg width={66} height={66}>
            <use href={`${sprite}#icon-arrow-right-o`} />
          </svg>
          </Button>
        </NavButtons>
      </UpperBlock>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          <Card>Card 1</Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
          <Card>Card 4</Card>
          <Card>Card 5</Card>
        </Slider>
      </SliderWrapper>
      </div>
    </CasesSection>
  );
};
