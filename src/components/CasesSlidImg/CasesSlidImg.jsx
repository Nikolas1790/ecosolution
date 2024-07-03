import React from 'react';
import Slider from 'react-slick';
import { HorizontalLine } from "common/GiobalStyles";
import {  Card, CardContentBlock, CardMainInfBlock, CardSignature, CardSvgBlock, CardTitle, SliderWrapper, } from "./CasesSlidImg.styled";
import sprite from '../../img/sprite.svg';


import lvivWindGenerator from '../../img/Slider/Private-Enterprise-“ZAKHIDNYI BUH”.jpg';

export const CasesSlideImg = ({sliderRef, settings}) => {

  return (
        <SliderWrapper>
          <Slider ref={sliderRef} {...settings}>



            <Card>
              <img src={lvivWindGenerator} alt='Private Enterprise "ZAKHIDNYI BUH" ' />
              <CardContentBlock>
                <CardMainInfBlock>
                  <CardTitle>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</CardTitle>
                  <CardSvgBlock>
                    <svg width={28} height={28}>
                      <use href={`${sprite}#icon-arrow-right-top`} />
                    </svg>
                  </CardSvgBlock>
                </CardMainInfBlock>
                <HorizontalLine />
                <CardSignature>
                  <p>Wind Power for auto field irrigation</p>
                  <p>July 2023</p>
                </CardSignature>

              </CardContentBlock>
            </Card>
















            <Card>Card 2</Card>
            <Card>Card 3</Card>
            <Card>Card 4</Card>
            <Card>Card 5</Card>
          </Slider>
        </SliderWrapper>

  );
};
