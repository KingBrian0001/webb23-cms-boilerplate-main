/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["a.storyblok.com"],
      formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  env: {
      CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  },
  async redirects() {
      return [
          {
              source: '/old-route',
              destination: '/new-route',
              permanent: true,
          },
      ];
  },
  i18n: {
      locales: ['en', 'fr', 'es'],
      defaultLocale: 'en',
  },
};

export default nextConfig;
