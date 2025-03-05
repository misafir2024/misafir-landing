/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // Allows ESM modules
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto", // Ensures Webpack processes ESM files correctly
    });
    return config;
  },
};

module.exports = nextConfig;
