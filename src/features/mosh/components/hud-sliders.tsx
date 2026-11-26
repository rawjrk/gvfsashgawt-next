"use client";

import { DoubleSlider } from "@/components/ui/double_slider";

import { useMoshState } from "../providers/state";

export function MoshHUDSliders() {
  const { range, handleFromChange, handleToChange, enabled } = useMoshState();

  return (
    <>
      <DoubleSlider
        from={range.from}
        to={range.to}
        onFromChangeAction={handleFromChange}
        onToChangeAction={handleToChange}
        rangeMin={range.min}
        rangeMax={range.max}
        hasError={range.hasError}
        disabled={!enabled}
      />
    </>
  );
}
