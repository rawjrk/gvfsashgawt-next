type NavLink = { href: string; title: string };

const navLinks = [
  { href: "/", title: "home" },
  { href: "/mosh", title: "mosh" },
  { href: "/about", title: "about" },
] as const satisfies NavLink[];

export type NavLinkHref = (typeof navLinks)[number]["href"];

export const getNavLinks = (excludeHref?: NavLinkHref) => {
  return navLinks.filter(({ href }) => href !== excludeHref);
};

export const extLinks: NavLink[] = [
  { href: "https://instagram.com/gvfsashgawt", title: "IN" },
  { href: "https://flic.kr/gvfsashgawt", title: "FL" },
  { href: "https://github.com/rawjrk/gvfsashgawt-next", title: "GH" },
] satisfies NavLink[];
