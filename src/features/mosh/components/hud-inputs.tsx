"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DoubleSlider } from "@/components/ui/double_slider";
import { FileInput } from "@/components/ui/file_input";
import { SUPPORTED_IMAGE_TYPES } from "@/constants/image_types";

import { useMoshState } from "../providers/state";

export function MoshHUDInputs() {
  const {
    range,
    handleFromChange,
    handleToChange,
    animated,
    handleAnimatedChange,
    handleFilePick,
    enabled,
  } = useMoshState();

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

      <Checkbox
        label="animated"
        checked={animated}
        onChangeAction={handleAnimatedChange}
      />

      <FileInput
        onFilePickAction={handleFilePick}
        supportedFormats={SUPPORTED_IMAGE_TYPES}
      />
    </>
  );
}
