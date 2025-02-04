/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "img.clerk.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { debug: false };
    return config;
  },
};

module.exports = nextConfig;
