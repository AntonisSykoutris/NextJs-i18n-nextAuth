'use client';

import {
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
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

export default function NavbarItems(): JSX.Element {
  const t = useTranslations('Navbar');
  return (
    <NavbarContent className='hidden sm:flex gap-8 text-xl ' justify='center'>
      <NavbarItem>
        <Link color='foreground' href='/' as={NextLink}>
          <div className='flex items-center'>
            <HomeIcon className='h-5 w-5' />
            <span className='text-xl'> {t('home')}</span>
          </div>
        </Link>
      </NavbarItem>

      <Dropdown className='min-w-[8em]' showArrow={true}>
        <DropdownTrigger className=''>
          <div className=' cursor-pointer flex items-center'>
            <DocumentTextIcon className='h-5 w-5' />
            <span>{t('invoices')}</span>
          </div>
        </DropdownTrigger>
        <DropdownMenu
          variant='faded'
          aria-label='Dropdown menu with description'
        >
          <DropdownSection showDivider>
            <DropdownItem
              key={t('invoices_inbox')}
              textValue={t('invoices_inbox')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('invoices_inbox')}
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection showDivider>
            <DropdownItem
              key={t('invoices_preInvoices')}
              textValue={t('invoices_preInvoices')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('invoices_preInvoices')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('invoices_transmissionError')}
              textValue={t('invoices_transmissionError')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('invoices_transmissionError')}
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              key={t('invoices_approvalFlow')}
              textValue={t('invoices_approvalFlow')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('invoices_approvalFlow')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('invoices_foodAndBeverages')}
              textValue={t('invoices_foodAndBeverages')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('invoices_foodAndBeverages')}
              </Link>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <NavbarItem>
        <Link color='foreground' href='/' as={NextLink}>
          <div className=' flex items-center'>
            <CreditCardIcon className='h-5 w-5 ' />
            <span className='text-xl'>{t('billing')}</span>
          </div>
        </Link>
      </NavbarItem>
      <Dropdown className='min-w-[8em]' showArrow={true}>
        <DropdownTrigger>
          <div className='cursor-pointer flex items-center'>
            <CogIcon className='h-5 w-5' />
            <span>{t('tools')}</span>
          </div>
        </DropdownTrigger>
        <DropdownMenu
          variant='faded'
          aria-label='Dropdown menu with description'
        >
          <DropdownSection showDivider>
            <DropdownItem
              key={t('tools_impersonate')}
              textValue={t('tools_impersonate')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_impersonate')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_vatValidationVies')}
              textValue={t('tools_vatValidationVies')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_vatValidationVies')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_vatValidationGsis')}
              textValue={t('tools_vatValidationGsis')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_vatValidationGsis')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_EmailValidationIapr')}
              textValue={t('tools_EmailValidationIapr')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_EmailValidationIapr')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_IaprConverter')}
              textValue={t('tools_IaprConverter')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_IaprConverter')}
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection
            title={t('tools_management')}
            classNames={{
              heading: 'font-bold underline decoration-black text-sm',
            }}
          >
            <DropdownItem
              key={t('tools_invoiceCustomization')}
              textValue={t('tools_invoiceCustomization')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_invoiceCustomization')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_userManagement')}
              textValue={t('tools_userManagement')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_userManagement')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_branchManagement')}
              textValue={t('tools_branchManagement')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_branchManagement')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_companyManagement')}
              textValue={t('tools_companyManagement')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_companyManagement')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_packagesExpiration')}
              textValue={t('tools_packagesExpiration')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_packagesExpiration')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('tools_inactivePackages')}
              textValue={t('tools_inactivePackages')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('tools_inactivePackages')}
              </Link>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className='min-w-[8em]' showArrow={true}>
        <DropdownTrigger>
          <div className='cursor-pointer flex items-center'>
            <QuestionMarkCircleIcon className='h-5 w-5' />
            <span>{t('help')}</span>
          </div>
        </DropdownTrigger>
        <DropdownMenu
          variant='faded'
          aria-label='Dropdown menu with description'
        >
          <DropdownSection showDivider>
            <DropdownItem
              key={t('help_frequentlyAskedQuestions')}
              textValue={t('help_frequentlyAskedQuestions')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('help_frequentlyAskedQuestions')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('help_downloadManual')}
              textValue={t('help_downloadManual')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('help_downloadManual')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('help_iaprDocumentation')}
              textValue={t('help_iaprDocumentation')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('help_iaprDocumentation')}
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              key={t('help_openApiDocumentation')}
              textValue={t('help_openApiDocumentation')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('help_openApiDocumentation')}
              </Link>
            </DropdownItem>
            <DropdownItem
              key={t('help_developerWiki')}
              textValue={t('help_developerWiki')}
            >
              <Link color='foreground' href='/' as={NextLink}>
                {t('help_developerWiki')}
              </Link>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
}
