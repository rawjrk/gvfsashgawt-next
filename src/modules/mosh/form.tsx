"use client";

import { DoubleSlider } from "@/components/ui/double_slider";
import { useValidatedRange } from "@/hooks/use_validated_range";

export function MoshForm() {
  const { from, setFrom, to, setTo, min, max } = useValidatedRange({
    min: 0,
    max: 10,
  });

  return (
    <>
      <DoubleSlider
        from={from}
        to={to}
        onFromChangeAction={setFrom}
        onToChangeAction={setTo}
        rangeMin={min}
        rangeMax={max}
      />
    </>
  );
}
