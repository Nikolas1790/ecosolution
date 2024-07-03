import React from 'react';
import Slider from 'react-slick';
import { HorizontalLine } from "common/GiobalStyles";
import {  Card, CardContentBlock, CardMainInfBlock, CardSignature, CardSvgBlock, CardTitle, SliderWrapper, } from "./CasesSlidImg.styled";
import sprite from '../../img/sprite.svg';


import lvivWindGenerator from '../../img/Slider/Private-Enterprise-“ZAKHIDNYI BUH”.jpg';
import zhytomyrBoschGenerator from '../../img/Slider/Private-Enterprise-“Bosch”.jpg';
import rivneGenerator from '../../img/Slider/Private-Enterprise-“Biotech”.jpg';
import khersonGenerator from '../../img/Slider/Private-Enterprise-“HealthyFarm”.jpg';
import zaporizhiaBiotechGenerator from '../../img/Slider/Zaporizhia-Private-Enterprise-“Biotech”.jpg';

const cardsData = [
  {
    id: 1,
    imgSrc: lvivWindGenerator,
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    description: 'Wind Power for auto field irrigation',
    date: 'July 2023',
  },
  {
    id: 2,
    imgSrc: zhytomyrBoschGenerator,
    title: 'Zhytomyr city Private Enterprise “Bosch”',
    description: 'Solar Panels for industrial use',
    date: 'November 2023',
  },
  {
    id: 3,
    imgSrc: rivneGenerator,
    title: 'Rivne city Private Enterprise “Biotech”',
    description: 'Description for card 3',
    date: 'September 2023',
  },
  {
    id: 4,
    imgSrc: khersonGenerator,
    title: 'Kherson city Private Enterprise “HealthyFarm”',
    description: 'Wind power',
    date: 'October 2023',
  },
  {
    id: 5,
    imgSrc: zaporizhiaBiotechGenerator,
    title: 'Zaporizhia city Private Enterprise “Biotech”',
    description: 'Mini nuclear stations',
    date: 'May 2021',
  },
];

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







