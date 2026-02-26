'use strict';

// Next.js configuration for TypeScript, ESLint, and performance optimization
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Enable TypeScript support in Next.js
    ignoreBuildErrors: false,
  },
  eslint: {
    // Enable ESLint support in Next.js
    ignoreDuringBuilds: false,
  },
  images: {
    // Optimize Image loading
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    // Any experimental features can be added here
    optimizeCss: true,
  },
};

module.exports = nextConfig;