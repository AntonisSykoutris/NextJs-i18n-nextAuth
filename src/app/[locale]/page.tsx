import { useTranslations, useLocale } from 'next-intl';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { options } from '../api/auth/[...nextauth]/options';
import CompanyCard from './components/CompanyCard';

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
    <div className="container mx-auto flex flex-col  justify-items-center items-center gap-10">
      <h1>{t('title')}</h1>
      <div className="container mx-auto place-items-center place-content-stretch items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  auto-rows-fr">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <CompanyCard key={i} index={i} />
          ))}
      </div>
    </div>
  );
}
