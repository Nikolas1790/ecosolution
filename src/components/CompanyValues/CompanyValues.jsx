import { HorizontalLine } from 'common/GiobalStyles';
import sprite from '../../img/sprite.svg';
import { GridContainer, GridItem, ContentWrapper, ContentTitle, ContentText, ImageContainer, ContentTitleSVG } from "./CompanyValues.styled";

import solarPanelsPlansh from '../../img/About/solar-panels-planshet.jpg';
import windGeneratorPlansh from '../../img/About/wind-generators-planshet.jpg';

export const CompanyValues = () => {
  return (
    <GridContainer>

      <GridItem>
        <div>
        <ContentWrapper>
          <ContentTitleSVG >
            <use href={`${sprite}#icon-cpu-charge`} />
          </ContentTitleSVG>
          <ContentTitle>Openness</ContentTitle>
        </ContentWrapper>
        
        <HorizontalLine />
        </div>
        <ContentText>to the world, people, new ideas and projects</ContentText>
      </GridItem>

      <GridItem>
      <div>
        <ContentWrapper>
          <ContentTitleSVG >
            <use href={`${sprite}#icon-global-edit`} />
          </ContentTitleSVG>
          <ContentTitle>Responsibility</ContentTitle>
        </ContentWrapper>
        <HorizontalLine />
        </div>
        <ContentText>we are aware that the results of our work have an impact on our lives and the lives of future generations</ContentText>
      </GridItem>

      <ImageContainer >
        <img src={windGeneratorPlansh} alt="wind generator" />
      </ImageContainer>
      <ImageContainer >
        <img src={solarPanelsPlansh} alt="solar panels" />
      </ImageContainer>

      <GridItem>
      <div>
        <ContentWrapper>
          <ContentTitleSVG>
            <use href={`${sprite}#icon-cpu-charge-s`} />
          </ContentTitleSVG>
          <ContentTitle>Innovation</ContentTitle>
        </ContentWrapper>
        <HorizontalLine />
        </div>
        <ContentText>we use the latest technology to implement non-standard solutions</ContentText>
      </GridItem>
      
      <GridItem>
      <div>
        <ContentWrapper>
          <ContentTitleSVG>
            <use href={`${sprite}#icon-ranking`} />
          </ContentTitleSVG>
          <ContentTitle>Quality</ContentTitle>
        </ContentWrapper>
        <HorizontalLine />
        </div>
        <ContentText>we do not strive to be the first among others, but we want to be the best in our business</ContentText>
      </GridItem>
    </GridContainer>
  );
};