"use client";

import { useRef, useState } from "react";

import { SpanProps } from "@/types/elements";
import { gibberishWord } from "@/utils/gibberish";

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
