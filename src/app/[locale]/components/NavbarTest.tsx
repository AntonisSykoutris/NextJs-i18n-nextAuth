'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import LocaleSwitcherTest from './LocaleSwitcherTest';

type NavbarProps = {
  locale: string;
};

export default function NavbarTest({ locale }: NavbarProps): JSX.Element {
  const t = useTranslations('Navbar');
  const pathName = usePathname();

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
    <Navbar>
      <NavbarBrand>
        <p> 🍸</p>
        <p className='font-bold text-inherit'>EINVOICING</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            {t('home')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcherTest
            locale={locale}
            redirectedPathName={redirectedPathName}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
