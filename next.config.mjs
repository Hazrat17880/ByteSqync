// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output (recommended for cPanel)
  output: 'standalone',

  // Optimize images (fix the <img> warning)
  images: {
    domains: ['https://pixigroup.co'], // Add your image host domains
    unoptimized: true, // Disable if you want Next.js to optimize images
  },

  // Enable React Strict Mode (optional)
  reactStrictMode: true,

  // If deploying in a subdirectory (e.g., /subfolder)
  // basePath: '/subfolder',

  // If using a CDN or proxy (optional)
  // assetPrefix: 'https://cdn.yourdomain.com',
};

export default nextConfig;