"use client";

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from "react";

import { CanvasProps } from "@/types/elements";

type MoshCanvasContextType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

const MoshCanvasContext = createContext<MoshCanvasContextType | null>(null);

export const MoshCanvasProvider = ({ children }: PropsWithChildren) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <MoshCanvasContext.Provider value={{ canvasRef }}>
      {children}
    </MoshCanvasContext.Provider>
  );
};

export const useMoshCanvas = () => {
  const ctx = useContext(MoshCanvasContext);
  if (!ctx) {
    throw Error("useMoshCanvas must be used inside MoshCanvasProvider");
  }
  return ctx;
};

type MoshCanvasElementProps = CanvasProps & {
  className?: string;
};

export function MoshCanvasElement({ ...props }: MoshCanvasElementProps) {
  const { canvasRef } = useMoshCanvas();
  return <canvas ref={canvasRef} {...props} />;
}
