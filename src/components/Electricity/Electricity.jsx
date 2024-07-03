import { ElectricityContainer, ElectricityTitle, KWT, KWTSpan, VerticalLine } from "./Electricity.styled";

export const Electricity = () => {
  return (
    <ElectricityContainer >
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />

      <KWT>1.134.147.814<KWTSpan>kWh</KWTSpan></KWT>
    </ElectricityContainer>
  );
};
