import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";
import { ElementProps } from "@/types/elements";
import { ExtractHref } from "@/types/navigation";

import { GibLink } from "../gibberish";
import { FakeLink } from "../link";

const SEPARATOR_CHAR = "*";

interface NavbarProps extends ElementProps<"nav"> {
  currentHref: ExtractHref<typeof NAV_LINKS> | null;
}

export function Navbar({ currentHref, className, ...props }: NavbarProps) {
  return (
    <nav
      className={cn(
        "bg-background text-foreground flex w-full flex-row items-center justify-center p-4",
        className,
      )}
      {...props}
    >
      {NAV_LINKS.map((link, i) => (
        <span key={link.href} className="text-2xl">
          {i > 0 && <Separator />}
          <NavLink {...link} active={link.href === currentHref} />
        </span>
      ))}
    </nav>
  );
}

function NavLink({
  active,
  title,
  href,
}: {
  active: boolean;
  title: string;
  href: string;
}) {
  if (active) {
    return (
      <FakeLink variant="default" className="text-foreground">
        {title}
      </FakeLink>
    );
  }

  return <GibLink href={href} title={title} />;
}

function Separator() {
  return <span>&nbsp;{SEPARATOR_CHAR}&nbsp;</span>;
}
