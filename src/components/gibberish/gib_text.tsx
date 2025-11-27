import { SpanProps } from "@/types/elements";
import { gibberishSentence } from "@/utils/gibberish";

export function GibText({ ...props }: Omit<SpanProps, "children">) {
  return (
    <span suppressHydrationWarning={true} {...props}>
      {gibberishSentence()}
    </span>
  );
}
