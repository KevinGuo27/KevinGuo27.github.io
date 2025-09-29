/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/KevinGuo27.github.io" : "",
  basePath:
    process.env.NODE_ENV === "production" ? "/KevinGuo27.github.io" : "",
};

module.exports = nextConfig;
