"use client";

import { useRef, useState } from "react";

import { gibberishWord } from "@/utils/gibberish";

import { Link, LinkProps } from "../custom_link";

type Props = Omit<LinkProps, "children"> & {
  title: string;
};

export function GibLink({ title, ...props }: Props) {
  const interval = useRef<NodeJS.Timeout>(null);
  const [content, setContent] = useState(title);

  return (
    <span
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
      <Link {...props}>{content}</Link>
    </span>
  );
}
