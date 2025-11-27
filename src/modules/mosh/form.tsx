"use client";

import { useCallback, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { DoubleSlider } from "@/components/ui/double_slider";
import { FileInput } from "@/components/ui/file_input";
import { ImageType } from "@/constants/image_types";
import { useValidatedRange } from "@/hooks/use_validated_range";
import { blobToBase64, loadBase64ToCanvas } from "@/utils/file";
import { getImageMimeType } from "@/utils/mime";

import { useCanvas } from "./canvas";
import { MoshHelpModal } from "./help";
import { MoshNavBlock } from "./navigation";
import { MoshTipsBlock } from "./tips";

const supportedImageTypes = (Object.values(ImageType) as string[])
  .concat("jpg")
  .map((ext) => `.${ext}`);

export function MoshForm() {
  const { canvasRef } = useCanvas();

  const [showHelpModal, setShowHelpModal] = useState(false);

  const { from, setFrom, to, setTo, min, max } = useValidatedRange({
    min: 0,
    max: 10,
  });

  const [animated, setAnimated] = useState(true);

  const handleFilePick = useCallback(
    async (file: File) => {
      if (canvasRef.current !== null) {
        void loadBase64ToCanvas(
          canvasRef.current,
          await blobToBase64(file),
          getImageMimeType(file),
        );
      }
    },
    [canvasRef],
  );

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

      <Checkbox
        label="animated"
        checked={animated}
        onChangeAction={setAnimated}
      />

      <FileInput
        onFilePickAction={handleFilePick}
        supportedFormats={supportedImageTypes}
      />

      <MoshTipsBlock onPress={() => setShowHelpModal(true)} />
      <MoshNavBlock />
      <MoshHelpModal
        show={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />
    </>
  );
}
