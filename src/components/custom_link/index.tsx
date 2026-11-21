import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

export type LinkProps = PropsWithChildren<NextLinkProps> & {
  className?: string;
};

export function Link({ children, className, ...props }: LinkProps) {
  const isExternal = /^https?:\/\//.test(props.href.toString());

  return (
    <NextLink
      className={cn(
        "text-primary hover:text-primary-foreground hover:bg-primary active:bg-tertiary active:text-tertiary-foreground -mx-1 px-1",
        className,
      )}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
      {...props}
    >
      {children}
    </NextLink>
  );
}

type FakeLinkVariant = "default" | "hover" | "active";

interface FakeLinkProps extends ElementProps<"span"> {
  variant?: FakeLinkVariant;
}

export function FakeLink({
  children,
  variant = "default",
  className,
  ...props
}: FakeLinkProps) {
  return (
    <span
      className={cn(
        "-mx-1 cursor-pointer px-1",
        {
          "text-primary": variant === "default",
          "text-primary-foreground bg-primary": variant === "hover",
          "bg-tertiary text-tertiary-foreground": variant === "active",
        },

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
