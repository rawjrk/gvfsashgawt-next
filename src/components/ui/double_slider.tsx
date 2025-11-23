"use client";

import { useMemo } from "react";

type Props = {
  from: number;
  to: number;
  onFromChangeAction: (from: number) => void;
  onToChangeAction: (to: number) => void;
  rangeMin: number;
  rangeMax: number;
};

export function DoubleSlider({
  from,
  to,
  onFromChangeAction,
  onToChangeAction,
  rangeMin,
  rangeMax,
}: Props) {
  const maxDecimalLength = useMemo(() => {
    return Math.floor(Math.log10(rangeMax || 1)) + 1;
  }, [rangeMax]);

  const fromDisplay = useMemo(
    () => from.toString().padStart(maxDecimalLength, "0"),
    [from, maxDecimalLength],
  );

  const toDisplay = useMemo(
    () => to.toString().padStart(maxDecimalLength, "0"),
    [to, maxDecimalLength],
  );

  return (
    <div className="text-foreground flex flex-col gap-1 text-xl leading-none">
      <label>
        from: {fromDisplay}
        <input
          className="w-full"
          value={-from}
          onChange={(event) => onFromChangeAction(-event.target.value)}
          type="range"
          style={{ direction: "rtl" }}
          min={-rangeMax}
          max={-rangeMin}
        />
      </label>
      <label className="text-foreground">
        ..to: {toDisplay}
        <input
          className="w-full"
          value={to}
          onChange={(event) => onToChangeAction(+event.target.value)}
          type="range"
          min={rangeMin}
          max={rangeMax}
        />
      </label>
    </div>
  );
}
