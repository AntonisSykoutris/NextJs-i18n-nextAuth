'use client';

import {
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from '@nextui-org/react';

import NextLink from 'next/link';
import { useTranslations } from 'next-intl';

import {
  HomeIcon,
  DocumentTextIcon,
  CreditCardIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';

type NavbarItem = {
  label: string;
  subLabel?: string;
  icon?: JSX.Element;
  href?: string;
  divider?: boolean;
  subItems?: NavbarItem[][];
};

const navbarItems: NavbarItem[] = [
  {
    label: 'home',
    icon: <HomeIcon className='h-5 w-5' />,
    href: '/',
  },
  {
    label: 'invoices',
    icon: <DocumentTextIcon className='h-5 w-5' />,
    subItems: [
      [
        { label: 'invoices_inbox', href: '/', divider: true },
        { label: 'invoices_preInvoices', href: '/' },
        { label: 'invoices_transmissionError', href: '/', divider: true },
        { label: 'invoices_approvalFlow', href: '/' },
        { label: 'invoices_foodAndBeverages', href: '/' },
      ],
    ],
  },
  {
    label: 'billing',
    icon: <CreditCardIcon className='h-5 w-5' />,
    href: '/',
  },
  {
    label: 'tools',
    icon: <CogIcon className='h-5 w-5' />,
    subItems: [
      [
        { label: 'tools_impersonate', href: '/' },
        { label: 'tools_vatValidationVies', href: '/' },
        { label: 'tools_vatValidationGsis', href: '/' },
        { label: 'tools_EmailValidationIapr', href: '/' },
        { label: 'tools_IaprConverter', href: '/' },
        { label: 'tools_invoiceCustomization', href: '/', divider: true },
      ],
      [
        {
          label: 'tools_branchManagement',
          href: '/',
          subLabel: 'tools_management',
        },
        { label: 'tools_companyManagement', href: '/' },
        { label: 'tools_packagesExpiration', href: '/' },
        { label: 'tools_inactivePackages', href: '/' },
      ],
    ],
  },
  {
    label: 'help',
    icon: <QuestionMarkCircleIcon className='h-5 w-5' />,
    subItems: [
      [
        { label: 'help_frequentlyAskedQuestions', href: '/' },
        { label: 'help_downloadManual', href: '/' },
        { label: 'help_iaprDocumentation', href: '/', divider: true },
        { label: 'help_openApiDocumentation', href: '/' },
        { label: 'help_developerWiki', href: '/' },
      ],
    ],
  },
];

export default function NavbarItems({
  isMobile,
}: {
  isMobile: boolean;
}): JSX.Element {
  const t = useTranslations('Navbar');
  let Tag = isMobile ? NavbarMenuItem : NavbarContent;

  const renderDropdownItems = (items: NavbarItem[]) =>
    items.map((item) => (
      <DropdownItem
        key={t(item.label)}
        textValue={t(item.label)}
        showDivider={item?.divider}
      >
        <Link color='foreground' href={item.href} as={NextLink}>
          {t(item.label)}
        </Link>
      </DropdownItem>
    ));

  return (
    <Tag className={isMobile ? '' : 'hidden sm:flex gap-8 text-xl'}>
      {navbarItems.map((item) => (
        <NavbarItem key={item.label}>
          {item.subItems ? (
            <Dropdown
              className='min-w-[8em]'
              showArrow={true}
              disableAnimation={true}
            >
              <DropdownTrigger>
                <Button
                  disableRipple
                  className='p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500 text-lg'
                  startContent={item.icon ? item.icon : null}
                  radius='sm'
                  variant='light'
                >
                  {t(item.label)}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant='faded'
                aria-label={`Dropdown menu for ${item.label}`}
              >
                {item.subItems &&
                  item?.subItems.map((subitemArr, index) => (
                    <DropdownSection
                      key={index}
                      title={
                        subitemArr[0]?.subLabel
                          ? t(subitemArr[0]?.subLabel)
                          : ''
                      }
                      showDivider={item.divider ? true : false}
                      classNames={{
                        heading: 'font-bold underline decoration-black text-sm',
                      }}
                    >
                      {renderDropdownItems(subitemArr)}
                    </DropdownSection>
                  ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              href={item.href}
              as={NextLink}
              disableRipple
              className='p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500 text-lg'
              startContent={item.icon ? item.icon : null}
              radius='sm'
              variant='light'
            >
              {t(item.label)}
            </Button>
          )}
        </NavbarItem>
      ))}
    </Tag>
  );
}
