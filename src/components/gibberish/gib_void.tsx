"use client";

import { useRef, useState } from "react";

import { gibberishWord } from "@/lib/gibberish";
import { SpanProps } from "@/types/elements";

type Props = Omit<SpanProps, "children"> & {
  title: string;
};

export function GibVoid({ title, ...props }: Props) {
  const interval = useRef<NodeJS.Timeout>(null);
  const [content, setContent] = useState(title);

  return (
    <span
      {...props}
      onMouseEnter={() => {
        interval.current = setInterval(() => {
          setContent(gibberishWord(title.length));
        }, 60);
      }}
      onMouseLeave={() => {
        if (interval.current) {
          clearInterval(interval.current);
        }
        setContent(title);
      }}
    >
      {content}
    </span>
  );
}
