import sprite from '../../img/sprite.svg';
import { HorizontalLine } from "components/Main/Main.styled";
import { GridContainer, GridItem, ContentWrapper } from "./CompanyValues.styled";
export const CompanyValues = () => {
  return (
    <GridContainer>
      <GridItem>
        <ContentWrapper>
          <svg width={32} height={32}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
          <h4>Openness</h4>
        </ContentWrapper>
        <HorizontalLine />
        <p>to the world, people, new ideas and projects</p>
      </GridItem>
      <GridItem>
        <ContentWrapper>
          <svg width={32} height={32}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
          <h4>Openness</h4>
        </ContentWrapper>
        <HorizontalLine />
        <p>to the world, people, new ideas and projects</p>
      </GridItem>
      <GridItem>
        <ContentWrapper>
          <svg width={32} height={32}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
          <h4>Openness</h4>
        </ContentWrapper>
        <HorizontalLine />
        <p>to the world, people, new ideas and projects</p>
      </GridItem>
      <GridItem>
        <ContentWrapper>
          <svg width={32} height={32}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
          <h4>Openness</h4>
        </ContentWrapper>
        <HorizontalLine />
        <p>to the world, people, new ideas and projects</p>
      </GridItem>
    </GridContainer>
  );
};
