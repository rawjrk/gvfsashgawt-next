import { VT323 } from "next/font/google";

import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

const vt323 = VT323({
  variable: "--font-vt323",
  weight: ["400"],
  subsets: ["latin"],
});

export function Body({ children, className, ...props }: ElementProps<"body">) {
  return (
    <body
      className={cn(
        vt323.variable,
        "bg-background text-foreground flex h-screen w-screen flex-col antialiased",
        className,
      )}
      {...props}
    >
      {children}
    </body>
  );
}
