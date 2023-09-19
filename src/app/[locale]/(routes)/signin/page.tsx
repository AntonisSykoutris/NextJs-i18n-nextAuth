import { redirect } from 'next/navigation';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

import SignInForm from '../../components/SignInForm';

export default async function SignInPage() {
  const session = await getServerSession(options);

  if (session) {
    redirect('/');
  }

  return (
    <div className='flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <SignInForm />
    </div>
  );
}
