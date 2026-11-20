type AppleTreeConfig = Record<
  "COLOR" | "COLOR_2" | "DARK" | "MOSH",
  {
    url: string;
    range?: [number, number];
  }
>;

export const APPLE_TREE = {
  COLOR: {
    url: "/apple-tree/color.jpg",
    range: [345, 375],
  },
  COLOR_2: {
    url: "/apple-tree/color2.jpg",
  },
  DARK: {
    url: "/apple-tree/dark.jpg",
  },
  MOSH: {
    url: "/apple-tree/mosh.jpg",
  },
} as const satisfies AppleTreeConfig;
