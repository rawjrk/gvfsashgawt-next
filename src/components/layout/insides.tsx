import { NavLinkHref } from "@/constants/navigation";
import { cn } from "@/lib/cn";
import { H1Props, MainProps, NavProps } from "@/types/elements";

import { GibWord } from "../gibberish";
import { NavigationLinks } from "./blocks";

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
      <GibWord
        className="capitalize"
        title="There's"
        override={{ at: 5, char: "'" }}
      />{" "}
      <GibWord title="nothing" /> <GibWord title="here" />.
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

export function NavigationBar({
  className,
  currentHref,
  ...props
}: Omit<NavProps, "children"> & { currentHref: NavLinkHref | null }) {
  return (
    <nav
      className={cn(
        "bg-background w-[40%] max-w-[350px] p-4 text-center text-2xl leading-none",
        className,
      )}
      {...props}
    >
      GO <NavigationLinks excludeHref={currentHref} />
    </nav>
  );
}
