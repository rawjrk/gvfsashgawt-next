import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  async rewrites() {
    return [
      { source: "/djpops/i-dissolve", destination: "/djpops/i-dissolve.html" },
      { source: "/djpops/i-dissolve", destination: "/djpops/I-DISSOLVE.html" },
    ];
  },
};

export default nextConfig;
