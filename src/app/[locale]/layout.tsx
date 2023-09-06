import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthProvider';
import './globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const locale = useLocale();
  let session: Session | null = null;

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  try {
    session = await getServerSession(options);
  } catch (error) {
    session = null;
    console.log('failed to get session', error);
  }

  return (
    <html lang={locale}>
      <body>
        <AuthProvider session={session}>
          <Header lang={locale} />
          {/* <Navbar /> */}
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
