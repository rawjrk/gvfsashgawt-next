import Image from "next/image";
import { JSX } from "react";

import { extLinks, navLinks } from "@/constants/navigation";

import { Link } from "../custom_link";

type PProps = JSX.IntrinsicElements["p"];

export function Paragraph({ children, className, ...props }: PProps) {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
}

export function NavigationLinks({ excludeHref }: { excludeHref?: string }) {
  return (
    <>
      {navLinks
        .filter(({ href }) => href !== excludeHref)
        .map(({ href, title }, index) => (
          <span key={title}>
            {index > 0 ? " || " : " >> "}
            <Link key={title} href={href}>
              {title.toUpperCase()}
            </Link>
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
          <Link key={title} href={href}>
            {title.toUpperCase()}
          </Link>
        </span>
      ))}{" "}
      &gt;
    </Paragraph>
  );
}

export function SmonksVideo() {
  return (
    <video width="200" height="232" autoPlay loop muted>
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
