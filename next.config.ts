import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alloc001.adyuta.group",
        pathname: "/api/v1/files/**",
      },
    ],
  },
};

export default nextConfig;
