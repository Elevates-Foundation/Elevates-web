import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/chapters/ekc",
        destination: "/chapters/eranad-knowledge-city",
      },
      {
        source: "/chapters/ekctc",
        destination: "/chapters/eranad-knowledge-city",
      },
      {
        source: "/chapter/:slug",
        destination: "/chapters/:slug",
      },
    ];
  },
};

export default nextConfig;
