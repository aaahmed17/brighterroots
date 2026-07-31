import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brighterrootsyouthservices.ca",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
