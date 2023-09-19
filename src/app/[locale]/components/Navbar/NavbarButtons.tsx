'use client';

import {
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

import LocaleDropdown from './LocaleDropdown';
import { signOut, useSession } from 'next-auth/react';

export default function NavbarButtons({ locale }: { locale: string }) {
  const t = useTranslations('Navbar');
  const { data: session } = useSession();
  return (
    <NavbarContent justify="end">
      {session ? null : (
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      )}

      <NavbarItem>
        <LocaleDropdown locale={locale} />
      </NavbarItem>
      {session ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            onAction={key => {
              if (key === t('profile_logout')) signOut();
            }}
          >
            <DropdownItem key={t('profile')} textValue={t('profile')} className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key={t('profile_selectCompany')} textValue={t('profile_selectCompany')}>
              <Link color="foreground" href="/" as={NextLink}>
                {t('profile_selectCompany')}
              </Link>
            </DropdownItem>
            <DropdownItem key={t('profile_myClaimsToDelete')} textValue={t('profile_myClaimsToDelete')}>
              <Link color="foreground" href="/" as={NextLink}>
                {t('profile_myClaimsToDelete')}
              </Link>
            </DropdownItem>
            <DropdownItem key={t('profile_logout')} textValue={t('profile_logout')} color={'danger'}>
              <span className=" text-red-500 ">{t('profile_logout')}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : null}
    </NavbarContent>
  );
}
