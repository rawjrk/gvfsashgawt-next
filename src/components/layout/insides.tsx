import { JSX } from "react";

import { cn } from "@/utils/cn";

type H1Props = JSX.IntrinsicElements["h1"];
type MainProps = JSX.IntrinsicElements["main"];

export function DefaultHeader({
  className,
  ...props
}: Omit<H1Props, "children">) {
  return (
    <h1
      className={cn(
        "bg-background w-[50%] max-w-[500px] p-4 text-center text-3xl leading-none",
        className,
      )}
      {...props}
    >
      There&apos;s nothing here.
    </h1>
  );
}

export function MainContainer({ children, className, ...props }: MainProps) {
  return (
    <main
      className={cn(
        "bg-background w-[60%] max-w-[660px] p-4 text-center text-2xl leading-none",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}
