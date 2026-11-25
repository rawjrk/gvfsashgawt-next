import { cva } from "class-variance-authority";
import { ElementType } from "react";

import { cn } from "@/lib/cn";
import { ElementTag, PolymorphicProps } from "@/types/elements";

type VerticalPosition = "top" | "center" | "bottom" | "stretch";
type HorizontalPosition = "left" | "center" | "right" | "stretch";

export type OverlayPosition = `${VerticalPosition}-${HorizontalPosition}`;

/**
 * Full-size layer stacked over its (relative) parent.
 * Holds each `Overlay.Panel`.
 */
export function OverlayContainer<T extends ElementTag = "div">({
  as,
  children,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [--overlay-inset:--spacing(4)]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

const overlayPanelVariants = cva(
  "pointer-events-auto absolute max-h-[calc(100%-2*var(--overlay-inset))] max-w-[calc(100%-2*var(--overlay-inset))]",
  {
    variants: {
      vertical: {
        top: "top-(--overlay-inset)",
        center: "top-1/2 -translate-y-1/2",
        bottom: "bottom-(--overlay-inset)",
        stretch: "inset-y-(--overlay-inset)",
      } satisfies Record<VerticalPosition, string>,
      horizontal: {
        left: "left-(--overlay-inset)",
        center: "left-1/2 -translate-x-1/2",
        right: "right-(--overlay-inset)",
        stretch: "inset-x-(--overlay-inset)",
      } satisfies Record<HorizontalPosition, string>,
    },
  },
);

type OverlayPanelOwnProps = {
  position: OverlayPosition;
};

/**
 * A menu container pinned to an anchor point of the overlay,
 * or stretched along an edge.
 * Must be rendered inside `Overlay.Container`.
 */
export function OverlayPanel<E extends ElementTag>({
  as,
  position,
  children,
  className,
  ...props
}: PolymorphicProps<E, OverlayPanelOwnProps>) {
  const Tag = (as ?? "div") as ElementType;

  const [vertical, horizontal] = position.split("-") as [
    VerticalPosition,
    HorizontalPosition,
  ];

  return (
    <Tag
      data-position={position}
      className={cn(overlayPanelVariants({ vertical, horizontal }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

const Overlay = {
  Container: OverlayContainer,
  Panel: OverlayPanel,
};

export default Overlay;
