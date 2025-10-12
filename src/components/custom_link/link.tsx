import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<NextLinkProps>;
export type { Props as LinkProps };

export function Link({ children, ...props }: Props) {
  return (
    <NextLink
      className="text-primary hover:text-primary-foreground hover:bg-primary active:bg-tertiary active:text-tertiary-foreground -mx-1 px-1"
      {...props}
    >
      {children}
    </NextLink>
  );
}
