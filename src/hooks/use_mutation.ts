import { useCallback } from "react";

export const useIncrement = (
  value: number,
  setValue: (value: number) => void,
) => {
  return useCallback(() => {
    setValue(value + 1);
  }, [value, setValue]);
};

export const useDecrement = (
  value: number,
  setValue: (value: number) => void,
) => {
  return useCallback(() => {
    setValue(value - 1);
  }, [value, setValue]);
};
