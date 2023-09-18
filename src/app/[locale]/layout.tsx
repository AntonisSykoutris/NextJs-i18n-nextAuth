import { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import Navbar from './components/Navbar';
import NavbarTest from './components/NavbarTest';
import ThemeSwitcher from './components/ThemeSwitcher';
import AuthProvider from './context/AuthProvider';
import NextUIProvider from './context/NextUIProvider';
import './globals.css';

// Define the props type for RootLayout
type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    // Load messages for the specified locale
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log('Failed to get the localized text', error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextUIProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <AuthProvider>
              <Navbar locale={locale} />
              <NavbarTest locale={locale} />
              <main>{children}</main>
            </AuthProvider>
          </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
