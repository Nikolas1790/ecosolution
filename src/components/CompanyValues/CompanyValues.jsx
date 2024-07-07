import { HorizontalLine } from 'common/GiobalStyles';
import sprite from '../../img/sprite.svg';
import { GridContainer, GridItem, ContentWrapper, ContentTitle, ContentText, ContentTitleSVG } from "./CompanyValues.styled";
import { CompanyValuesImgs } from 'components/CompanyValuesImgs/CompanyValuesImgs';

export const CompanyValues = () => {
  return (
    <GridContainer>
      <GridItem>
        <div>
        <ContentWrapper>
          <ContentTitleSVG >
            <use href={`${sprite}#icon-maximize-circle`} />
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

      <CompanyValuesImgs />

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