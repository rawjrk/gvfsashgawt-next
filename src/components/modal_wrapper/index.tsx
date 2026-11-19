import { PropsWithChildren, useId } from "react";

import { cn } from "@/lib/cn";

export type BaseModalProps = {
  overlayClassName?: string;
  containerClassName?: string;
  show: boolean;
  onClose: () => void;
};

type Props = PropsWithChildren<BaseModalProps>;

export function ModalWrapper({
  children,
  overlayClassName,
  containerClassName,
  show,
  onClose,
}: Props) {
  const contentWrapperId = useId();

  return (
    <div
      className={cn(
        "absolute inset-0 flex size-full items-center justify-center bg-[#333]/90",
        overlayClassName,
      )}
      hidden={!show}
      onClick={(event) => {
        event.stopPropagation();
        const contentWrapper = document.getElementById(contentWrapperId);
        const clickedContent = contentWrapper?.contains(
          event.target as HTMLElement | null,
        );
        if (!clickedContent) {
          onClose();
        }
      }}
    >
      <aside
        id={contentWrapperId}
        className={cn(
          "text-foreground bg-background p-6 text-xl",
          containerClassName,
        )}
      >
        {children}
      </aside>
    </div>
  );
}
