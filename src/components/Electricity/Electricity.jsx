import { useEffect, useState } from "react";
import { ElectricityContainer, ElectricityTitle, KWT, KWTSpan, VerticalLine } from "./Electricity.styled";

export const Electricity = () => {
  const initialCount = 1134147814;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return new Intl.NumberFormat('de-DE').format(number);
  };

  return (
    <ElectricityContainer >
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />
      <KWT>{formatNumber(count)}<KWTSpan>kWh</KWTSpan></KWT>
    </ElectricityContainer>
  );
};
