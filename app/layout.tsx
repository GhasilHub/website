import type { Metadata } from 'next';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import NavBar from '@/layouts/NavBar';
import Footer from '@/layouts/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import getAppLocale from '@/utils/getAppLocale';

export const metadata: Metadata = {
  title: 'GhasilHub - Laundry Management System',
  description:
    'From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.',
  keywords: [
    'business management',
    'productivity',
    'team collaboration',
    'workflow',
    'GhasilHub',
  ],
  authors: [{ name: 'GhasilHub Team' }],
  creator: 'GhasilHub',
  publisher: 'GhasilHub',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://ghasilhub.com',
    siteName: 'GhasilHub',
    title: 'GhasilHub - Laundry Management System',
    description:
      'From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.',
    images: [
      {
        url: 'https://ghasilhub.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GhasilHub - Laundry Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ghasilhub',
    creator: '@ghasilhub',
    title: 'GhasilHub - Laundry Management System',
    description:
      'From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.',
    images: ['https://ghasilhub.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://ghasilhub.com',
    languages: {
      en: 'https://ghasilhub.com',
      ar: 'https://ghasilhub.com/ar',
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

const Bukra = localFont({
  variable: '--font-bukra',
  src: [
    {
      path: '../public/fonts/29LT-Bukra-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/29LT-Bukra-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/29LT-Bukra-Semi-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/29LT-Bukra-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getAppLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      className={`${Bukra.variable} overflow-x-hidden`}
    >
      <body className='overflow-x-hidden'>
        <NextIntlClientProvider messages={messages}>
          <div className='flex min-h-screen flex-col'>
            <NavBar locale={locale} />
            <main className='flex-1'>{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
