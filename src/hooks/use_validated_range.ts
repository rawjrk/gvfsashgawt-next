import { useCallback, useState } from "react";

export const enforceBoundaries = (value: number, min: number, max: number) => {
  return Math.min(Math.max(min, value), max);
};

// TODO: add logic different modes
// type ChangeMode = "override" | "block";

type Range = [number, number];

export const useValidatedRange = ({
  from: initFrom = 0,
  to: initTo = 1,
  min: initMin = 0,
  max: initMax = 1,
} = {}) => {
  const [from, setFrom] = useState(initFrom);
  const [to, setTo] = useState(initTo);

  const [min, setMin] = useState(initMin);
  const [max, setMax] = useState(initMax);

  const changeFrom = useCallback(
    (value: number): Range => {
      const nextFrom = enforceBoundaries(value, min, max - 1);
      const nextTo = Math.max(nextFrom + 1, to);

      setFrom(nextFrom);
      setTo(nextTo);
      return [nextFrom, nextTo];
    },
    [min, max, to],
  );

  const changeTo = useCallback(
    (value: number): Range => {
      const nextTo = enforceBoundaries(value, min + 1, max);
      const nextFrom = Math.min(nextTo - 1, from);

      setTo(nextTo);
      setFrom(nextFrom);
      return [nextFrom, nextTo];
    },
    [min, max, from],
  );

  const changeMin = useCallback(
    (nextMin: number): Range => {
      setMin(nextMin);
      setMax(Math.max(nextMin + 1, max));
      return changeFrom(from);
    },
    [changeFrom, max, from],
  );

  const changeMax = useCallback(
    (nextMax: number): Range => {
      setMax(nextMax);
      setMin(Math.min(nextMax - 1, min));
      return changeTo(to);
    },
    [changeTo, min, to],
  );

  return {
    from,
    to,
    changeFrom,
    changeTo,
    min,
    max,
    changeMin,
    changeMax,
  };
};
