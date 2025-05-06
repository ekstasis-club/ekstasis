// next.config.ts

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

// Usa `remotePatterns` en lugar de `domains`
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vydnyy5ovteb9gb6.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(config);
