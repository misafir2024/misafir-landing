/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // Allows ESM modules
  },
  // Add images configuration to ensure images work properly
  images: {
    domains: [],
    unoptimized: true, // This can help with image loading issues on Vercel
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto", // Ensures Webpack processes ESM files correctly
    })
    return config
  },
}

module.exports = nextConfig




