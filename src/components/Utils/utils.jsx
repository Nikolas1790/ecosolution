import React from 'react';
import sprite from '../../img/sprite.svg';


import lvivWindGenerator from '../../img/Slider/Private-Enterprise-“ZAKHIDNYI BUH”.jpg';
import zhytomyrBoschGenerator from '../../img/Slider/Private-Enterprise-“Bosch”.jpg';
import rivneGenerator from '../../img/Slider/Private-Enterprise-“Biotech”.jpg';
import khersonGenerator from '../../img/Slider/Private-Enterprise-“HealthyFarm”.jpg';
import zaporizhiaBiotechGenerator from '../../img/Slider/Zaporizhia-Private-Enterprise-“Biotech”.jpg';
import { ConnectionBlockLink } from 'common/GiobalStyles';

export const cardsData = [
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



export const faqData = [
  {
    id: 1,
    question: 'How do wind turbines and solar panels work together in a renewable energy system?',
    answer: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.'
  },
  {
    id: 2,
    question: 'What sets EcoSolution"s renewable energy solutions apart from others on the market?',
    answer: 'Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions.'
  },
  {
    id: 3,
    question: 'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
    answer: 'Businesses and communities gain sustainable advantages by integrating EcoSolution"s renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future.'
  },
  {
    id: 4,
    question: 'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
    answer: 'EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact.'
  },
  {
    id: 5,
    question: 'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
    answer: 'EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all.'
    
  }
];

export const InstagramLink = () => (
  <ConnectionBlockLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <svg width={24} height={24}>
      <use href={`${sprite}#icon-instagram`} />
    </svg>
  </ConnectionBlockLink>
);

export const FacebookLink = () => (
  <ConnectionBlockLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <svg width={24} height={24}>
      <use href={`${sprite}#icon-facebook`} />
    </svg>
  </ConnectionBlockLink>
);

