type NavLink = { href: string; title: string };

export const navLinks = [
  { href: "/", title: "home" },
  { href: "/mosh", title: "mosh" },
  { href: "/about", title: "about" },
] satisfies NavLink[];

export const extLinks: NavLink[] = [
  { href: "https://instagram.com/gvfsashgawt", title: "IN" },
  { href: "https://flic.kr/gvfsashgawt", title: "FL" },
  { href: "https://github.com/rawjrk/gvfsashgawt-next", title: "GH" },
] satisfies NavLink[];
