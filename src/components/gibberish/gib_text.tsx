import { JSX } from "react";

import { gibberishSentence } from "@/utils/gibberish";

type SpanProps = JSX.IntrinsicElements["span"];

export function GibText({ ...props }: Omit<SpanProps, "children">) {
  return (
    <span suppressHydrationWarning={true} {...props}>
      {gibberishSentence()}
    </span>
  );
}
