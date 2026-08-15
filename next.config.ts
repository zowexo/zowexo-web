import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zowexo-web",
  assetPrefix: "/zowexo-web/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;