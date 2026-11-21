export interface NavLink {
  href: string;
  title: string;
}

export type ExtractHref<T extends NavLink[]> = T[number]["href"];
