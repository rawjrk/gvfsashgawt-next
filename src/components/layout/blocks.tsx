import Image from "next/image";

import { extLinks, getNavLinks, NavLinkHref } from "@/constants/navigation";
import { ParagraphProps } from "@/types/elements";

import { GibLink } from "../gibberish";

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}

export function NavigationLinks({ excludeHref }: { excludeHref: NavLinkHref }) {
  return (
    <>
      {getNavLinks(excludeHref).map(({ href, title }, index) => (
        <span key={title}>
          {index > 0 ? " || " : " >> "}
          <GibLink
            key={title}
            className="uppercase"
            href={href}
            title={title}
          />
        </span>
      ))}
    </>
  );
}

export function ExternalLinks() {
  return (
    <Paragraph>
      &lt;{" "}
      {extLinks.map(({ href, title }, index) => (
        <span key={title}>
          {index > 0 ? " * " : ""}
          <GibLink
            key={title}
            className="uppercase"
            href={href}
            title={title}
          />
        </span>
      ))}{" "}
      &gt;
    </Paragraph>
  );
}

export function SmonksVideo({ className }: { className?: string }) {
  return (
    <video className={className} width="200" height="232" autoPlay loop muted>
      <source src="/smonks.mp4" type="video/mp4" />
      <Image
        src="/smonks-fallback.jpg"
        alt="Smonks Video"
        width="200"
        height="232"
      />
    </video>
  );
}
