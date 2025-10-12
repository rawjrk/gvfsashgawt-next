import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

type Props = PropsWithChildren<NextLinkProps> & { className?: string };
export type { Props as LinkProps };

export function Link({ children, className, ...props }: Props) {
  return (
    <NextLink
      className={cn(
        "text-primary hover:text-primary-foreground hover:bg-primary active:bg-tertiary active:text-tertiary-foreground -mx-1 px-1",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
