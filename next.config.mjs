import createNextIntlPlugin from 'next-intl/plugin';

// Specify the path to the request configuration
const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts' // The path to the request configuration file
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // for create docker image
  // Removed @21st-extension/toolbar-next as it was causing build issues
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure webpack to handle SVG imports
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  
  // Configure images
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need
  },
  
  // Enable experimental features if needed
  experimental: {
    // serverActions: true, // Uncomment if using Server Actions
  },
};

export default withNextIntl(nextConfig);
