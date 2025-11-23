import { useCallback, useState } from "react";

export const enforceBoundaries = (value: number, min: number, max: number) => {
  return Math.min(Math.max(min, value), max);
};

// TODO: add logic different modes
// type ChangeMode = "override" | "block";

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

  const onChangeFrom = useCallback(
    (value: number) => {
      const nextFrom = enforceBoundaries(value, min, max - 1);
      const nextTo = Math.max(nextFrom + 1, to);

      setFrom(nextFrom);
      setTo(nextTo);
    },
    [min, max, to],
  );

  const onChangeTo = useCallback(
    (value: number) => {
      const nextTo = enforceBoundaries(value, min + 1, max);
      const nextFrom = Math.min(nextTo - 1, from);

      setTo(nextTo);
      setFrom(nextFrom);
    },
    [min, max, from],
  );

  const onChangeMin = (nextMin: number) => {
    setMin(nextMin);
    setMax(Math.max(nextMin + 1, max));

    onChangeFrom(from); // ??
  };

  const onChangeMax = (nextMax: number) => {
    setMax(nextMax);
    setMin(Math.min(nextMax - 1, min));

    onChangeTo(to); // ??
  };

  return {
    from,
    to,
    setFrom: onChangeFrom,
    setTo: onChangeTo,
    min,
    max,
    setMin: onChangeMin,
    setMax: onChangeMax,
  };
};
