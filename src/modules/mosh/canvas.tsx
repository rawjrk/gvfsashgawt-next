"use client";

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from "react";

import { CanvasProps } from "@/types/elements";

type CanvasContextType = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
};

const CanvasContext = createContext<CanvasContextType | null>(null);

export const CanvasProvider = ({ children }: PropsWithChildren) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <CanvasContext.Provider value={{ canvasRef }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const ctx = useContext(CanvasContext);
  if (!ctx) {
    throw Error("useCanvas must be used inside CanvasProvider");
  }
  return ctx;
};

type CanvasElementProps = CanvasProps & {
  className?: string;
};

export function CanvasElement({ className, ...props }: CanvasElementProps) {
  const { canvasRef } = useCanvas();
  return <canvas ref={canvasRef} className={className} {...props} />;
}
