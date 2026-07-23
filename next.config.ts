import type { NextConfig } from "next";

// GitHub Pages serves this repo at /portfolio-1/, and static export can't
// use the Next.js image optimizer (no server to run it on).
const repoBasePath = "/portfolio-1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
