import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats first; Next falls back to the original for browsers
    // that support neither.
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
