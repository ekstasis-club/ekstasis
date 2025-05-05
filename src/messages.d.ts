import 'next-intl';

declare module 'next-intl' {
  interface Messages {
    Navigation: {
      events: string;
      faq: string;
      archive: string;
    };
  }
}
