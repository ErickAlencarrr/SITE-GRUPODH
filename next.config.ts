import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dhagropecuaria.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
