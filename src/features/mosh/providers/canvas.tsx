"use client";

import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from "react";

import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

type MoshCanvasContextType = {
  ref: RefObject<HTMLCanvasElement | null>;
};

const MoshCanvasContext = createContext<MoshCanvasContextType | null>(null);

export const MoshCanvasProvider = ({ children }: PropsWithChildren) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <MoshCanvasContext.Provider value={{ ref: canvasRef }}>
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

type MoshCanvasElementProps = ElementProps<"canvas"> & {
  className?: string;
};

export function MoshCanvasElement({ ...props }: MoshCanvasElementProps) {
  const moshCanvas = useMoshCanvas();
  return <canvas ref={moshCanvas.ref} {...props} />;
}

export function MoshCanvasContainer({
  children,
  className,
  ...props
}: ElementProps<"section">) {
  return (
    <section
      className={cn(
        "flex h-full min-h-0 w-full min-w-0 flex-1 items-center justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
