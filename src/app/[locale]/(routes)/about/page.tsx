import { options } from '../../../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

export default async function About() {
  const session = await getServerSession(options);
  const locale = useLocale();

  if (!session) {
    redirect(`/${locale}/signin?callbackUrl=/server`);
  }

  return (
    <section className='flex flex-col gap-6'>
      <h1>ABOUT SERVER PAGE</h1>
    </section>
  );
}
