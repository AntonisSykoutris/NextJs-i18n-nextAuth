'use client';

import React, { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n';

interface props {
  lang: string;
}

function LanguageSwitcher({ lang }: props): JSX.Element {
  const pathName = usePathname();

  const redirectedPathName = (lang: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = lang;
    return segments.join('/');
  };

  return (
    <header className='flex h-24 flex-col justify-center bg-stone-100'>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
          {i18n.locales.map((lang) => {
            return (
              <li key={lang} className='text-sm'>
                <Link
                  href={redirectedPathName(lang)}
                  className='rounded-md border bg-black px-3 py-2 text-white'
                >
                  {lang}
                </Link>
              </li>
            );
          })}
          <li className='text-sm'>
            <Link href={`/${lang}/`}>Home</Link>
          </li>
          <li className='text-sm'>
            <Link href={`/${lang}/about`}>About</Link>
          </li>
          <li className='text-sm'>
            <Link href={`/${lang}/signin`}>Sign In</Link>
          </li>
          <li className='text-sm'>
            <Link href={`/api/auth/signout`}>Sign Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LanguageSwitcher;
