"use client";

import { useCallback, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { DoubleSlider } from "@/components/ui/double_slider";
import { FileInput } from "@/components/ui/file_input";
import { ImageType } from "@/constants/image_types";
import { useAnimatedDatamosh } from "@/hooks/use_animated_datamosh";
import { loadBlobToCanvas } from "@/lib/file";

import { MoshHelpModal, MoshTipsBlock } from "./components";
import { useMoshCanvas } from "./providers/canvas";
import { useMoshHelpModal } from "./providers/help";

const supportedImageTypes = (Object.values(ImageType) as string[])
  .concat("jpg")
  .map((ext) => `.${ext}`);

/** @deprecated */
export function MoshForm() {
  const moshCanvas = useMoshCanvas();
  const helpModal = useMoshHelpModal();

  const [enabled, setEnabled] = useState(false);

  const handleLoadContent = useCallback(
    async (image: Blob) => {
      setEnabled(true);
      const canvas = moshCanvas.ref.current;
      if (canvas) {
        await loadBlobToCanvas(canvas, image);
      }
    },
    [moshCanvas],
  );

  const {
    range,
    handleFromChange,
    handleToChange,
    handleFilePick,
    animated,
    handleAnimatedChange,
  } = useAnimatedDatamosh(handleLoadContent);

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
        supportedFormats={supportedImageTypes}
      />

      <MoshTipsBlock onPress={helpModal.open} />
      <MoshHelpModal show={helpModal.show} onClose={helpModal.close} />
    </>
  );
}
