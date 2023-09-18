import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function About() {
  /* 
    data: This can be three values: Session / undefined / null.
    * when the session hasn't been fetched yet, data will be undefined
    * in case it failed to retrieve the session, data will be null
    * in case of success, data will be Session.
    status: enum mapping to three possible session states: "loading" | "authenticated" | "unauthenticated"
  */
  const locale = useLocale();
  const session = await getServerSession(options);

  if (!session) {
    redirect(`/${locale}/signin?callbackUrl=/about`);
  }

  return (
    <section className='flex flex-col gap-6'>
      <h1>Welcome to about page {JSON.stringify(session, null, 2)}</h1>
    </section>
  );
}
