import { HorizontalLine } from 'common/GiobalStyles';
import sprite from '../../img/sprite.svg';
import { GridContainer, GridItem, ContentWrapper, ContentTitle, ContentText } from "./CompanyValues.styled";


export const CompanyValues = () => {
  return (
    <GridContainer>
      <GridItem>
        <div>
        <ContentWrapper>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-cpu-charge`} />
          </svg>
          <ContentTitle>Openness</ContentTitle>
        </ContentWrapper>
        
        <HorizontalLine />
        </div>
        <ContentText>to the world, people, new ideas and projects</ContentText>
      </GridItem>
      <GridItem>
      <div>
        <ContentWrapper>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-global-edit`} />
          </svg>
          <ContentTitle>Responsibility</ContentTitle>
        </ContentWrapper>
        <HorizontalLine />
        </div>
        <ContentText>we are aware that the results of our work have an impact on our lives and the lives of future generations</ContentText>
      </GridItem>
      <GridItem>
      <div>
        <ContentWrapper>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-cpu-charge-s`} />
          </svg>
          <ContentTitle>Innovation</ContentTitle>
        </ContentWrapper>
        <HorizontalLine />
        </div>
        <ContentText>we use the latest technology to implement non-standard solutions</ContentText>
      </GridItem>
      <GridItem>
      <div>
        <ContentWrapper>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-ranking`} />
          </svg>
          <ContentTitle>Quality</ContentTitle>
        </ContentWrapper>
        <HorizontalLine />
        </div>
        <ContentText>we do not strive to be the first among others, but we want to be the best in our business</ContentText>
      </GridItem>
    </GridContainer>
  );
};
