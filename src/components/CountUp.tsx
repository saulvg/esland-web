//Para utilizar el hook de " useProgressiveNumber " creamos un archivo de js o ts gracias a haber instalado preact

import { useEffect } from "preact/hooks";
import { useProgressiveNumber } from "../hooks/useProgressiveNumber";

export const CountUp = ({
  initial,
  final,
  decimals,
  duration,
}: {
  initial: number;
  final: number;
  decimals?: number;
  duration?: number;
}) => {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals);
  useEffect(() => {
    setCount(final);
  }, []);
  return <span>{count}</span>;
};
