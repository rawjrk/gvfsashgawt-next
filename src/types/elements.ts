import { ComponentProps, JSX } from "react";

export type ElementTag = keyof JSX.IntrinsicElements;
export type ElementProps<T extends ElementTag> = JSX.IntrinsicElements[T];

export type PolymorphicProps<
  E extends ElementTag,
  P extends object = Record<never, never>,
> = P & {
  as?: E;
} & Omit<ComponentProps<E>, keyof P | "as">;
