"use client";

import { useRef, useState } from "react";

import { gibberishWord } from "@/lib/gibberish";
import { ElementProps } from "@/types/elements";

type Props = Omit<ElementProps<"span">, "children"> & {
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
          setContent(gibberishWord(title));
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
