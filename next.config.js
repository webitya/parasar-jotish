
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add if using remote images
  },
  // Remove or fix experimental flags
  // experimental: { serverActions: true }, ← remove this if causing issues
}

module.exports = nextConfig


