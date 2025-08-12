import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["img.ophim.live", "image.tmdb.org"],
  },
};

export default nextConfig;
