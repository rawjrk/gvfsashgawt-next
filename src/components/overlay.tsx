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

const positionClasses: Record<OverlayPosition, string> = {
  "top-left": "top-(--overlay-inset) left-(--overlay-inset)",
  "top-center": "top-(--overlay-inset) left-1/2 -translate-x-1/2",
  "top-right": "top-(--overlay-inset) right-(--overlay-inset)",
  "center-left": "top-1/2 left-(--overlay-inset) -translate-y-1/2",
  "center-center": "top-1/2 left-1/2 -translate-1/2",
  "center-right": "top-1/2 right-(--overlay-inset) -translate-y-1/2",
  "bottom-left": "bottom-(--overlay-inset) left-(--overlay-inset)",
  "bottom-center": "bottom-(--overlay-inset) left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-(--overlay-inset) right-(--overlay-inset)",
};

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
  return (
    <div
      data-position={position}
      className={cn(
        "pointer-events-auto absolute max-h-[calc(100%-2*var(--overlay-inset))] max-w-[calc(100%-2*var(--overlay-inset))]",
        positionClasses[position],
        className,
      )}
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
