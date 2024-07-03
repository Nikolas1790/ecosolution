import React from 'react';
import Slider from 'react-slick';
import { HorizontalLine } from "common/GiobalStyles";
import {  Card, CardContentBlock, CardMainInfBlock, CardSignature, CardSvgBlock, CardTitle, SliderWrapper, } from "./CasesSlidImg.styled";
import sprite from '../../img/sprite.svg';
import { cardsData } from 'components/Utils/utils';

export const CasesSlideImg = ({sliderRef, settings}) => { 
  return (
    <SliderWrapper>
      <Slider ref={sliderRef} {...settings}>
        {cardsData.map((card) => (
          <Card key={card.id}>
            <img src={card.imgSrc} alt={card.title} />
            <CardContentBlock>
              <CardMainInfBlock>
                <CardTitle>{card.title}</CardTitle>
                <CardSvgBlock>
                  <svg width={28} height={28}>
                    <use href={`${sprite}#icon-arrow-right-top`} />
                  </svg>
                </CardSvgBlock>
              </CardMainInfBlock>

              <HorizontalLine />

              <CardSignature>
                <p>{card.description}</p>
                <p>{card.date}</p>
              </CardSignature>
            </CardContentBlock>
          </Card>
        ))}
      </Slider>
    </SliderWrapper>
  );
};