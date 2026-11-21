"use client";

import { useRef, useState } from "react";

import { gibberishWord } from "@/lib/gibberish";
import { ElementProps } from "@/types/elements";

type Props = Omit<ElementProps<"span">, "children"> & {
  title: string;
};

export function GibVoid({
  title,
  onMouseEnter,
  onMouseLeave,
  ...props
}: Props) {
  const interval = useRef<NodeJS.Timeout>(null);
  const [content, setContent] = useState(title);

  return (
    <span
      {...props}
      onMouseEnter={(e) => {
        interval.current = setInterval(() => {
          setContent(gibberishWord(title.length));
        }, 60);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        if (interval.current) {
          clearInterval(interval.current);
        }
        setContent(title);
        onMouseLeave?.(e);
      }}
    >
      {content}
    </span>
  );
}
