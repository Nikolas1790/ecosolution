import React, { useState } from 'react';
import Slider from 'react-slick';
// import styled from 'styled-components';
import { TitleSection } from "common/GiobalStyles";
import { Button, Card, CasesSection, NavButtons, SlideInfo, SliderWrapper, UpperBlock } from "./Cases.styled";

export const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const sliderRef = React.createRef();
  return (
    <CasesSection >
      <TitleSection>Successful cases of our company</TitleSection>
<div>
      <UpperBlock>
        <SlideInfo>
          {String(currentSlide + 1).padStart(2, '0')} / 05
        </SlideInfo>
        <NavButtons>
          <Button onClick={prevSlide}>←</Button>
          <Button onClick={nextSlide}>→</Button>
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
