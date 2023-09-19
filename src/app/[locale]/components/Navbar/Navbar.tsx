'use client';

import { Navbar, NavbarBrand } from '@nextui-org/react';
import NavbarItems from './NavbarItems';
import NavbarButtons from './NavbarButtons';

type NavbarProps = {
  locale: string;
};

export default function MainNavbar({ locale }: NavbarProps): JSX.Element {
  return (
    <Navbar height={'4rem'} className="flex justify-between align-middle px-5" maxWidth="full">
      <NavbarBrand>
        <p className="font-bold text-2xl">EINVOICING</p>
      </NavbarBrand>
      <NavbarItems />
      <NavbarButtons locale={locale} />
    </Navbar>
  );
}
