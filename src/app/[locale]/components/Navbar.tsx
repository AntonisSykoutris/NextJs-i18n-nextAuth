'use client';

import React, { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { BellIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

// Import custom components and styles
import LocaleDropdown from './LocaleDropdown';

// Define interfaces for navigation items and component props
interface NavigationItem {
  name: string;
  href: string;
  id: string;
}

type NavbarProps = {
  locale: string;
};

// Utility function for combining CSS classes
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Define the Navbar component
export default function Navbar({ locale }: NavbarProps): JSX.Element {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [currentItem, setCurrentItem] = useState<string>('0');

  // Define navigation items
  const navigation: NavigationItem[] = [
    { name: 'Home', href: `/${locale}`, id: '0' },
    { name: 'About', href: `/${locale}/about`, id: '1' },
  ];

  // Generate a redirected path based on the selected locale
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    if (typeof window === 'undefined') {
      return null;
    } // returns null for SSR
    console.log('eimai sto dropdown');

    // console.log('mpika');
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/') + window.location.search;
  };

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          {/* Header section */}
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              {/* Mobile menu button */}
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  {/* <span className='absolute -inset-0.5' /> */}
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <BellIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <BellIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and desktop navigation */}
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>🍸</div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathName
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={
                          item.id === currentItem ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notification and user profile */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Notification button */}
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                </button>

                {/* User menu */}
                {session ? (
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>Open user menu</span>
                        <Image
                          className='h-8 w-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt='user photo'
                          height={20}
                          width={20}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={React.Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      {/* User menu items */}
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => signOut()}
                              className={classNames(
                                'block w-full px-4 py-2 text-sm text-gray-700 text-left',
                                active ? 'bg-gray-100' : ''
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : null}
                {/* Locale switcher dropdown */}
                <LocaleDropdown
                  locale={locale}
                  redirectedPathName={redirectedPathName}
                />
              </div>
            </div>
          </div>

          {/* Mobile navigation panel */}
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  onClick={() => setCurrentItem(item.id)}
                  className={classNames(
                    item.id === currentItem
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.id === currentItem ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
