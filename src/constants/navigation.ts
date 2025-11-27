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

export const INSTAGRAM_URL = "https://instagram.com/gvfsashgawt" as const;
export const FLICKR_URL = "https://flic.kr/gvfsashgawt" as const;
export const GITHUB_URL = "https://github.com/rawjrk/gvfsashgawt-next" as const;

export const extLinks: NavLink[] = [
  { href: INSTAGRAM_URL, title: "IN" },
  { href: FLICKR_URL, title: "FL" },
  { href: GITHUB_URL, title: "GH" },
] as const satisfies NavLink[];
