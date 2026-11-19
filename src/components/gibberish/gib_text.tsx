import { gibberishSentence } from "@/lib/gibberish";
import { SpanProps } from "@/types/elements";

export function GibText({ ...props }: Omit<SpanProps, "children">) {
  return (
    <span suppressHydrationWarning={true} {...props}>
      {gibberishSentence()}
    </span>
  );
}
