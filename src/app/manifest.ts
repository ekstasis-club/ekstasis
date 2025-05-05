import {MetadataRoute} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = routing.defaultLocale;

  // Configura el locale para el contexto de traducción
  setRequestLocale(locale);

  // Obtiene las traducciones del namespace 'Manifest'
  const t = await getTranslations('Manifest');

  return {
    name: t('name'),
    short_name: t('short_name'), // si lo tienes
    description: t('description'), // si lo tienes
    start_url: '/',
    theme_color: '#101E33',
    display: 'standalone',
    background_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ]
  };
}
