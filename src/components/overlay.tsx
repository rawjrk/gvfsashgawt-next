import { cva } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

type VerticalPosition = "top" | "center" | "bottom";
type HorizontalPosition = "left" | "center" | "right";

export type OverlayPosition = `${VerticalPosition}-${HorizontalPosition}`;

/**
 * Full-size layer stacked over its (relative) parent.
 * Holds each `Overlay.Panel`.
 */
export function OverlayContainer({
  children,
  className,
  ...props
}: ElementProps<"div">) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [--overlay-inset:--spacing(4)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
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
      } satisfies Record<VerticalPosition, string>,
      horizontal: {
        left: "left-(--overlay-inset)",
        center: "left-1/2 -translate-x-1/2",
        right: "right-(--overlay-inset)",
      } satisfies Record<HorizontalPosition, string>,
    },
  },
);

type OverlayPanelProps = ElementProps<"div"> & {
  position: OverlayPosition;
};

/**
 * A menu container pinned to one of 9 anchor points of the overlay.
 * Must be rendered inside `Overlay.Container`.
 */
export function OverlayPanel({
  position,
  children,
  className,
  ...props
}: OverlayPanelProps) {
  const [vertical, horizontal] = position.split("-") as [
    VerticalPosition,
    HorizontalPosition,
  ];

  return (
    <div
      data-position={position}
      className={cn(overlayPanelVariants({ vertical, horizontal }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

const Overlay = {
  Container: OverlayContainer,
  Panel: OverlayPanel,
};

export default Overlay;
