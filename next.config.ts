import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alloc001.adyuta.group",
        pathname: "/api/v1/files/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL!.replace(/\/$/, "")}/:path*`,

      }
    ];
  }
};

export default nextConfig;
