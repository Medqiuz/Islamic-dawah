/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'am', 'om', 'ar'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: ['localhost', 'your-domain.com', 'cdn.your-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
});

module.exports = nextConfig;