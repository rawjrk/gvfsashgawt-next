"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/cn";
import { gibberishWord } from "@/lib/gibberish";
import { ElementProps } from "@/types/elements";

type Props = Omit<ElementProps<"span">, "children"> & {
  title: string;
};

export function GibWord({ className, title, ...props }: Props) {
  const [content, setContent] = useState(title);

  const setGibberishContent = useCallback(() => {
    const gib = gibberishWord(title);
    setContent(gib);
  }, [title]);

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
