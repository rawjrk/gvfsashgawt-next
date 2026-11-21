import { VT323 } from "next/font/google";

import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

const vt323 = VT323({
  variable: "--font-vt323",
  weight: ["400"],
  subsets: ["latin"],
});

export function BaseBodyTemplate({
  children,
  className,
  ...props
}: ElementProps<"body">) {
  return (
    <body
      className={cn(vt323.variable, "h-screen w-screen antialiased", className)}
      {...props}
    >
      {children}
    </body>
  );
}

export function CenteredBodyTemplate({
  children,
  className,
  ...props
}: ElementProps<"body">) {
  return (
    <BaseBodyTemplate
      className={cn(
        "bg-background text-foreground flex flex-col items-center justify-center gap-8",
        className,
      )}
      {...props}
    >
      {children}
    </BaseBodyTemplate>
  );
}
