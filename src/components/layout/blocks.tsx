import { ElementProps } from "@/types/elements";

export function Paragraph({
  children,
  className,
  ...props
}: ElementProps<"p">) {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}
