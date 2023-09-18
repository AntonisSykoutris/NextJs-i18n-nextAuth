import { useTranslations, useLocale } from 'next-intl';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { options } from '../api/auth/[...nextauth]/options';

export default async function Home() {
  const locale = useLocale();
  const session = await getServerSession(options);
  if (!session?.user) {
    console.log('No active session : + ', JSON.stringify(session, null, 2));
    redirect(`/${locale}/signin?callbackUrl=/`);
  }

  console.log('Server Page Session:', JSON.stringify(session, null, 2));

  return <HomeContent />;
  // return <h1>{t('title')}</h1>;
}

function HomeContent() {
  const t = useTranslations('Index');
  return (
    <>
      <h1>{t('title')}</h1>
    </>
  );
}
