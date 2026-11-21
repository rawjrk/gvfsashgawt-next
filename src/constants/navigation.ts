import { NavLink } from "@/types/navigation";

export const NAV_LINKS = [
  { href: "/", title: "home" },
  { href: "/mosh", title: "mosh" },
  { href: "/about", title: "about" },
] as const satisfies NavLink[];

export const INSTAGRAM_URL = "https://instagram.com/gvfsashgawt" as const;
export const GITHUB_URL = "https://github.com/rawjrk/gvfsashgawt-next" as const;

export const EXT_LINKS = [
  { href: INSTAGRAM_URL, title: "IN" },
  { href: GITHUB_URL, title: "GH" },
] as const satisfies NavLink[];
