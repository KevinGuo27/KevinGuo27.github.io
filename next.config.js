/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export to ./out, published to GitHub Pages by .github/workflows/deploy.yml
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
