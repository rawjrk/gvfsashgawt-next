import { useCallback, useRef, useState } from "react";

import { DatamoshedImage } from "@/lib/datamosh";
import { Interval } from "@/lib/interval";

import { useValidatedRange } from "./use_validated_range";

export const useAnimatedDatamosh = (
  onLoadContent: (image: Blob) => Promise<void>,
) => {
  const datamoshedImageRef = useRef(new DatamoshedImage());
  const animationIntervalRef = useRef(new Interval({ intervalMs: 90 }));

  const [hasError, setHasError] = useState(false);
  const { from, changeFrom, to, changeTo, min, changeMin, max, changeMax } =
    useValidatedRange();

  const [animated, setAnimated] = useState(true);

  const handleAnimatedChange = useCallback((value: boolean) => {
    if (value) {
      animationIntervalRef.current.run();
    } else {
      animationIntervalRef.current.stop();
    }
    setAnimated(value);
  }, []);

  const loadContent = useCallback(async () => {
    const di = datamoshedImageRef.current;
    try {
      await onLoadContent(di.generateMoshedBlob());
      setHasError(false);
    } catch {
      setHasError(true);
      await onLoadContent(di.getOriginalBlob());
    }
  }, [onLoadContent]);

  const handleFilePick = useCallback(
    async (file: File) => {
      const di = datamoshedImageRef.current;
      await di.loadFromBlob(file);

      changeMin(0);
      changeMax(file.size);
      void loadContent();

      // TODO: reset/randomize range

      animationIntervalRef.current.setHandler(() => {
        void loadContent();
      });
    },
    [changeMin, changeMax, loadContent],
  );

  const handleFromChange = useCallback(
    (value: number) => {
      const nextRange = changeFrom(value);
      datamoshedImageRef.current.setDatamoshRange(...nextRange);
      if (!animated) {
        animationIntervalRef.current.runOnce();
      }
    },
    [changeFrom, animated],
  );

  const handleToChange = useCallback(
    (value: number) => {
      const nextRange = changeTo(value);
      datamoshedImageRef.current.setDatamoshRange(...nextRange);
      if (!animated) {
        animationIntervalRef.current.runOnce();
      }
    },
    [changeTo, animated],
  );

  return {
    range: { from, to, min, max, hasError },
    animated,
    handleAnimatedChange,
    handleFromChange,
    handleToChange,
    handleFilePick,
  };
};
