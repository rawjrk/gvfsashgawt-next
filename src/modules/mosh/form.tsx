"use client";

import { useCallback, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { DoubleSlider } from "@/components/ui/double_slider";
import { FileInput } from "@/components/ui/file_input";
import { ImageType } from "@/constants/image_types";
import { useAnimatedDatamosh } from "@/hooks/use_animated_datamosh";
import { useKeyboardControls } from "@/hooks/use_keyboard_controls";
import { useDecrement, useIncrement } from "@/hooks/use_mutation";
import { KeyCode } from "@/types/key_codes";
import { loadBase64ToCanvas } from "@/utils/file";

import { MoshHelpModal, MoshNavBlock, MoshTipsBlock } from "./components";
import { useMoshCanvas } from "./providers/canvas";
import { useMoshHelpModal } from "./providers/help";

const supportedImageTypes = (Object.values(ImageType) as string[])
  .concat("jpg")
  .map((ext) => `.${ext}`);

export function MoshForm() {
  const moshCanvas = useMoshCanvas();
  const helpModal = useMoshHelpModal();

  const [enabled, setEnabled] = useState(false);

  const handleLoadContent = useCallback(
    async (content: string, mimeType: string) => {
      setEnabled(true);
      const canvas = moshCanvas.ref.current;
      if (canvas) {
        await loadBase64ToCanvas(canvas, content, mimeType);
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
    triggerGeneration,
  } = useAnimatedDatamosh(handleLoadContent);

  const incrementFrom = useIncrement(range.from, handleFromChange);
  const decrementFrom = useDecrement(range.from, handleFromChange);
  const incrementTo = useIncrement(range.to, handleToChange);
  const decrementTo = useDecrement(range.to, handleToChange);

  useKeyboardControls({
    [KeyCode.Digit9]: incrementFrom,
    [KeyCode.Digit0]: decrementFrom,
    [KeyCode.Minus]: incrementTo,
    [KeyCode.Equal]: decrementTo,
    [KeyCode.KeyG]: triggerGeneration,
  });

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
      <MoshNavBlock />
      <MoshHelpModal show={helpModal.show} onClose={helpModal.close} />
    </>
  );
}
