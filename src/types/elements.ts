import { JSX } from "react";

export type ElementProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];
