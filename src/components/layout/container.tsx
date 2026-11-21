import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";

export function PageContainer({ children, ...props }: ElementProps<"main">) {
  return (
    <main
      className="flex flex-1 flex-col items-center justify-center gap-y-6"
      {...props}
    >
      {children}
    </main>
  );
}

export function CentralSection({
  children,
  className,
  ...props
}: ElementProps<"section">) {
  return (
    <section
      className={cn(
        "bg-background max-w-[600px] px-6 py-4 text-center text-2xl leading-none",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
