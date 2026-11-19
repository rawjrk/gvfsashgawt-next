import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

import { GibWord } from "../gibberish";

export function DefaultHeader({
  className,
  ...props
}: Omit<ElementProps<"h1">, "children">) {
  return (
    <h1
      className={cn(
        "bg-background w-[50%] max-w-[500px] p-4 text-center text-3xl leading-none",
        className,
      )}
      {...props}
    >
      <GibWord title="There's" /> <GibWord title="nothing" />{" "}
      <GibWord title="here" />.
    </h1>
  );
}
