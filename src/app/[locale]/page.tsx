// import { useTranslations } from 'next-intl';
import { useTranslations } from 'next-intl';
import { options } from '../api/auth/[...nextauth]/options';
import { useLocale } from 'next-intl';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(options);
  const locale = useLocale();
  if (!session) {
    redirect(`/${locale}/signin?callbackUrl=/server`);
  }
  return <HomeContent />;
  // return <h1>{t('title')}</h1>;
}

function HomeContent() {
  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
}
