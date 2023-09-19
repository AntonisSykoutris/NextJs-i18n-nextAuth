'use client';

import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react';
import NavbarItems from './NavbarItems';
import NavbarButtons from './NavbarButtons';
import { useState } from 'react';

type NavbarProps = {
  locale: string;
};

export default function MainNavbar({ locale }: NavbarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItems = ['bbb', 'test'];
  return (
    <Navbar
      height={'4rem'}
      className="flex justify-between align-middle px-5"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      <NavbarBrand>
        <p className="font-bold text-2xl">EINVOICING</p>
      </NavbarBrand>
      <NavbarItems />
      <NavbarButtons locale={locale} />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            test
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
