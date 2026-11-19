"use client";

import { useMemo } from "react";

import { cn } from "@/lib/cn";

type Props = {
  from: number;
  to: number;
  onFromChangeAction: (from: number) => void;
  onToChangeAction: (to: number) => void;
  rangeMin: number;
  rangeMax: number;
  hasError?: boolean;
  disabled?: boolean;
};

export function DoubleSlider({
  from,
  to,
  onFromChangeAction,
  onToChangeAction,
  rangeMin,
  rangeMax,
  hasError = false,
  disabled = false,
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
    <div
      className={cn(
        "flex flex-col gap-1 text-xl leading-none",
        hasError ? "text-red-500" : "text-foreground",
      )}
    >
      <label>
        from: {fromDisplay}
        <input
          className="w-full"
          style={{ direction: "rtl" }} // must be reversed to look logically
          value={-from}
          onChange={(event) => onFromChangeAction(-event.target.value)}
          type="range"
          min={-rangeMax}
          max={-rangeMin}
          disabled={disabled}
        />
      </label>
      <label>
        ..to: {toDisplay}
        <input
          className="w-full"
          value={to}
          onChange={(event) => onToChangeAction(+event.target.value)}
          type="range"
          min={rangeMin}
          max={rangeMax}
          disabled={disabled}
        />
      </label>
    </div>
  );
}
