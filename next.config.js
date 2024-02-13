/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
