import { cn } from "@/lib/cn";
import { ButtonProps } from "@/types/elements";

export function Button({ children, className, ...props }: ButtonProps) {
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
