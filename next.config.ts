import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [55, 75],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [320, 480, 640],
  },
};

export default nextConfig;
