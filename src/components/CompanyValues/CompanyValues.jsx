import { HorizontalLine } from 'common/GiobalStyles';
import sprite from '../../img/sprite.svg';
import { GridContainer, GridItem, ContentWrapper, ContentTitle, ContentText, ImageContainer } from "./CompanyValues.styled";

import solarPanelsPlansh from '../../img/About/solar-panels-planshet.jpg';
import windGeneratorPlansh from '../../img/About/wind-generators-planshet.jpg';

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

      <ImageContainer >
        <img src={windGeneratorPlansh} alt="wind generator" />
      </ImageContainer>
      <ImageContainer >
        <img src={solarPanelsPlansh} alt="solar panels" />
      </ImageContainer>

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












































































// export const CompanyValues = () => {
//   return (
//     <GridContainer>
//       <GridItem>
//         <div>
//         <ContentWrapper>
//           <svg width={16} height={16}>
//             <use href={`${sprite}#icon-cpu-charge`} />
//           </svg>
//           <ContentTitle>Openness</ContentTitle>
//         </ContentWrapper>
        
//         <HorizontalLine />
//         </div>
//         <ContentText>to the world, people, new ideas and projects</ContentText>
//       </GridItem>
//       <GridItem>
//       <div>
//         <ContentWrapper>
//           <svg width={16} height={16}>
//             <use href={`${sprite}#icon-global-edit`} />
//           </svg>
//           <ContentTitle>Responsibility</ContentTitle>
//         </ContentWrapper>
//         <HorizontalLine />
//         </div>
//         <ContentText>we are aware that the results of our work have an impact on our lives and the lives of future generations</ContentText>
//       </GridItem>






//       <ImageContainer >
//         <img src={windGeneratorPlansh} alt="wind generator" />
//       </ImageContainer>
//       <ImageContainer >
//         <img src={solarPanelsPlansh} alt="wind generator" />
//       </ImageContainer>


//       <GridItem>
//       <div>
//         <ContentWrapper>
//           <svg width={16} height={16}>
//             <use href={`${sprite}#icon-cpu-charge-s`} />
//           </svg>
//           <ContentTitle>Innovation</ContentTitle>
//         </ContentWrapper>
//         <HorizontalLine />
//         </div>
//         <ContentText>we use the latest technology to implement non-standard solutions</ContentText>
//       </GridItem>
//       <GridItem>
//       <div>
//         <ContentWrapper>
//           <svg width={16} height={16}>
//             <use href={`${sprite}#icon-ranking`} />
//           </svg>
//           <ContentTitle>Quality</ContentTitle>
//         </ContentWrapper>
//         <HorizontalLine />
//         </div>
//         <ContentText>we do not strive to be the first among others, but we want to be the best in our business</ContentText>
//       </GridItem>
//     </GridContainer>
//   );
// };


// import { HorizontalLine } from 'common/GiobalStyles';
// import sprite from '../../img/sprite.svg';
// import { GridContainer, GridItem, ContentWrapper, ContentTitle, ContentText, ImageContainer } from "./CompanyValues.styled";
// import { companyValues } from 'components/Utils/utils';


// import solarPanelsPlansh from '../../img/About/solar-panels-planshet.jpg';
// // import solarPanelsDesc from '../../img/About/solar-panels-planshet.jpg';

// import windGeneratorPlansh from '../../img/About/wind-generators-planshet.jpg';
// // import windGeneratorDesc from '../../img/About/wind-generators-planshet.jpg';

// export const CompanyValues = () => {
//   return (
//     <GridContainer>
//       {companyValues.map((item) => (
//         <GridItem key={item.id}>
//           <div>
//             <ContentWrapper>
//               <svg width={16} height={16}>
//                 <use href={`${sprite}#${item.iconId}`} />
//               </svg>
//               <ContentTitle>{item.title}</ContentTitle>
//             </ContentWrapper>
//             <HorizontalLine />
//           </div>
//           <ContentText>{item.text}</ContentText>
//         </GridItem>
//       ))}

// <ImageContainer>
//         <img src={solarPanelsPlansh} alt="wind generator" />
//       </ImageContainer>
//       <ImageContainer>
//         <img src={windGeneratorPlansh} alt="wind generator" />
//       </ImageContainer>
//     </GridContainer>
//   );
// };


// import { HorizontalLine } from 'common/GiobalStyles';
// import sprite from '../../img/sprite.svg';
// import { GridContainer, GridItem, ContentWrapper, ContentTitle, ContentText, ImageContainer } from "./CompanyValues.styled";
// import { companyValues } from 'components/Utils/utils';
// import solarPanelsPlansh from '../../img/About/solar-panels-planshet.jpg';
// import windGeneratorPlansh from '../../img/About/wind-generators-planshet.jpg';

// export const CompanyValues = () => {
//   return (
//     <GridContainer>
//       <GridItem index={0}>
//         <div>
//           <ContentWrapper>
//             <svg width={16} height={16}>
//               <use href={`${sprite}#${companyValues[0].iconId}`} />
//             </svg>
//             <ContentTitle>{companyValues[0].title}</ContentTitle>
//           </ContentWrapper>
//           <HorizontalLine />
//         </div>
//         <ContentText>{companyValues[0].text}</ContentText>
//       </GridItem>


//       <GridItem index={1}>
//         <div>
//           <ContentWrapper>
//             <svg width={16} height={16}>
//               <use href={`${sprite}#${companyValues[1].iconId}`} />
//             </svg>
//             <ContentTitle>{companyValues[1].title}</ContentTitle>
//           </ContentWrapper>
//           <HorizontalLine />
//         </div>
//         <ContentText>{companyValues[1].text}</ContentText>
//       </GridItem>


//       <ImageContainer index={0}>
//         <img src={solarPanelsPlansh} alt="wind generator" />
//       </ImageContainer>


//       <ImageContainer index={1}>
//         <img src={windGeneratorPlansh} alt="wind generator" />
//       </ImageContainer>


//       <GridItem index={2}>
//         <div>
//           <ContentWrapper>
//             <svg width={16} height={16}>
//               <use href={`${sprite}#${companyValues[2].iconId}`} />
//             </svg>
//             <ContentTitle>{companyValues[2].title}</ContentTitle>
//           </ContentWrapper>
//           <HorizontalLine />
//         </div>
//         <ContentText>{companyValues[2].text}</ContentText>
//       </GridItem>


//       <GridItem index={3}>
//         <div>
//           <ContentWrapper>
//             <svg width={16} height={16}>
//               <use href={`${sprite}#${companyValues[3].iconId}`} />
//             </svg>
//             <ContentTitle>{companyValues[3].title}</ContentTitle>
//           </ContentWrapper>
//           <HorizontalLine />
//         </div>
//         <ContentText>{companyValues[3].text}</ContentText>
//       </GridItem>
//     </GridContainer>
//   );
// };
