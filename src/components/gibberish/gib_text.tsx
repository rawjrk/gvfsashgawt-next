import { gibberishSentence } from "@/lib/gibberish";
import { ElementProps } from "@/types/elements";

export function GibText({ ...props }: Omit<ElementProps<"span">, "children">) {
  return (
    <span suppressHydrationWarning={true} {...props}>
      {gibberishSentence()}
    </span>
  );
}
