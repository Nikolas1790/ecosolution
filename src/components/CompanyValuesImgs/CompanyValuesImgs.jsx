import solarPanelsPlansh from '../../img/About/solar-panels-planshet.jpg';
import solarPanelsDesct from '../../img/About/solar-panels-desct.jpg';
import windGeneratorPlansh from '../../img/About/wind-generators-planshet.jpg';
import windGeneratorDesct from '../../img/About/wind-generators-desct.jpg';
import { ImageContainer } from './CompanyValuesImgs.styled';

export const CompanyValuesImgs = () => {
  return (
    <>
      <ImageContainer >
        <source srcSet={windGeneratorDesct} media="(min-width: 1280px)" />
        <source srcSet={windGeneratorPlansh} media="(min-width: 768px)" />
        <img src={windGeneratorPlansh} alt="wind generator" />
      </ImageContainer>
      <ImageContainer >
        <source srcSet={solarPanelsDesct} media="(min-width: 1280px)" />
        <source srcSet={solarPanelsPlansh} media="(min-width: 768px)" />
        <img src={solarPanelsPlansh} alt="wind generator" />
      </ImageContainer>
    </>
  );
};