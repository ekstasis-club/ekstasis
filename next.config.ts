// next.config.ts

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

// Agrega la propiedad `images` con el dominio del blob de Vercel
const config: NextConfig = {
  images: {
    domains: ['vydnyy5ovteb9gb6.public.blob.vercel-storage.com'],
  },
};

export default withNextIntl(config);
