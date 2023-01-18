/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // mode: "production",
  buildExcludes: [/middleware-manifest.json$/],
})
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  // reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    domains: [
      "i.picsum.photos",
      "picsum.photos",
      "images.unsplash.com",
      "croucher-public.s3.ap-southeast-1.amazonaws.com",
      "sbn-bucket.s3.ap-south-1.amazonaws.com",
      "sbn-mm-test.s3.amazonaws.com"
    ],
    formats: ["image/webp"],
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `
      @import "~assets/styles/definitions.scss"; 
    `,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'en',
  },
  output:"standalone",
};



module.exports = withPWA({
  ...nextConfig,
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  runtimeCaching,
});