'use client';

import React, { FormEvent, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const email = useRef<string>('');
  const password = useRef<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const t = useTranslations('SignIn');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        email: email.current,
        password: password.current,
        redirect: false,
        callbackUrl: window.location.search.includes('?callbackUrl=')
          ? `${new URLSearchParams(window.location.search).get('callbackUrl')}`
          : '/',
      });

      if (res?.error) {
        if (res?.error === 'wrongCredentials') setError(t('wrongCredentials'));
        throw new Error(res?.error);
      }

      if (res?.url) {
        router?.replace(`${res?.url}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          {t('title')}
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              {t('emailLabel')}
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                onChange={(e) => (email.current = e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                {t('passwordLabel')}
              </label>
              <div className='text-sm'>
                <Link
                  href='/'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  {t('missingPassword')}
                </Link>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                onChange={(e) => (password.current = e.target.value)}
              />
            </div>
            <p className='text-red-500 text-sm mt-1 mx-2'>{error}</p>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {t('signInButton')}
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          {t('trial')}
          <Link
            href='/'
            className=' pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            {t('trialMessage')}
          </Link>
        </p>
      </div>
    </>
  );
}
