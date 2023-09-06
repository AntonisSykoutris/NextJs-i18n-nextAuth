'use client';

import { ReactNode } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface props {
  session: Session | null;
  children: ReactNode;
}

export default function AuthProvider({ session, children }: props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
