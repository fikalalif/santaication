import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "pfxy38jvaooxbp8q.public.blob.vercel-storage.com",
      }
    ]
  }
};

export default nextConfig;
