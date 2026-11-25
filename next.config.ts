import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The cost deep dive dropped its unsourced "$24,000" headline for a
      // sourced range, and its URL with it.
      { source: '/parents/the-24k-season', destination: '/parents/all-star-cheer-season-cost', permanent: true },
    ];
  },
};

export default nextConfig;
