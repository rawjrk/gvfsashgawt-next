"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { useAnimatedDatamosh } from "@/hooks/use_animated_datamosh";
import { loadBase64ToCanvas } from "@/lib/file";

import { useMoshCanvas } from "./canvas";

type MoshStateContextType = ReturnType<typeof useAnimatedDatamosh> & {
  enabled: boolean;
};

const MoshStateContext = createContext<MoshStateContextType | null>(null);

export const MoshStateProvider = ({ children }: PropsWithChildren) => {
  const moshCanvas = useMoshCanvas();

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
  } = useAnimatedDatamosh(handleLoadContent);

  const value = useMemo(
    () => ({
      enabled,
      range,
      handleFromChange,
      handleToChange,
      handleFilePick,
      animated,
      handleAnimatedChange,
    }),
    [
      enabled,
      range,
      handleFromChange,
      handleToChange,
      handleFilePick,
      animated,
      handleAnimatedChange,
    ],
  );

  return (
    <MoshStateContext.Provider value={value}>
      {children}
    </MoshStateContext.Provider>
  );
};

export const useMoshState = () => {
  const ctx = useContext(MoshStateContext);
  if (!ctx) {
    throw Error("useMoshState must be used inside MoshStateProvider");
  }
  return ctx;
};
