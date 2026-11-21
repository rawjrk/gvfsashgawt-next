"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/cn";
import { injectString } from "@/lib/datamosh/helpers";
import { gibberishWord } from "@/lib/gibberish";
import { ElementProps } from "@/types/elements";

type Props = Omit<ElementProps<"span">, "children"> & {
  title: string;
  override?: { at: number; char: string };
};

export function GibWord({ className, title, override, ...props }: Props) {
  const [content, setContent] = useState(title);

  const setGibberishContent = useCallback(() => {
    const gib = gibberishWord(title.length);

    if (!override) {
      setContent(gib);
      return;
    }

    setContent(
      injectString(
        gib,
        Math.min(override.at, gib.length - 1),
        override.char[0],
      ),
    );
  }, [title, override]);

  return (
    <span
      className={cn("hover:text-primary", className)}
      onMouseEnter={() => setGibberishContent()}
      onMouseLeave={() => setContent(title)}
      {...props}
    >
      {content}
    </span>
  );
}
