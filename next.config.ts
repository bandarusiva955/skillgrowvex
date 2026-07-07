import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid OneDrive sync issues with the default `.next` folder name.
  distDir: process.env.NEXT_DIST_DIR || "node_modules/.cache/sgv-next",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
