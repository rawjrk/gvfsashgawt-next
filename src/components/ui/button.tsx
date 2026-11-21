import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

export function Button({
  children,
  className,
  ...props
}: ElementProps<"button">) {
  return (
    <button
      className={cn(
        "bg-primary text-primary-foreground hover:bg-tertiary hover:text-tertiary-foreground active:bg-secondary active:text-secondary-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
