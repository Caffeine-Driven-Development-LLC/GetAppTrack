import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/getAppTrack'
};

export default nextConfig;
