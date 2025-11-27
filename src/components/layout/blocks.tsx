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
