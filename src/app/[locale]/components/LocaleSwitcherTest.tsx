'use client';

import { i18n } from '@/i18n';
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

type LocaleDropdownProps = {
  locale: string;
  redirectedPathName: Function;
};

export default function LocaleSwitcherTest({
  locale,
  redirectedPathName,
}: LocaleDropdownProps): JSX.Element {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='bordered'>{locale}</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Static Actions'
        disallowEmptySelection
        selectionMode='single'
      >
        {i18n.locales.map((locale) => {
          return <DropdownItem key={locale} title={locale}></DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
