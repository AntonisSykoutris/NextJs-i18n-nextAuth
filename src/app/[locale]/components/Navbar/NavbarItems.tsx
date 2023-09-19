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
  ChevronDownIcon,
} from '@heroicons/react/outline';

export default function NavbarItems(): JSX.Element {
  const t = useTranslations('Navbar');
  return (
    <NavbarContent className="hidden sm:flex gap-8 text-xl " justify="center">
      <NavbarItem>
        <Button
          href="/"
          as={NextLink}
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500 text-lg"
          startContent={<HomeIcon className="h-5 w-5" />}
          radius="sm"
          variant="light"
        >
          {t('home')}
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Dropdown className="min-w-[8em]" showArrow={true} disableAnimation={true}>
          <DropdownTrigger className="">
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500 text-lg"
              startContent={<DocumentTextIcon className="h-5 w-5" />}
              radius="sm"
              variant="light"
            >
              {t('invoices')}
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection showDivider>
              <DropdownItem key={t('invoices_inbox')} textValue={t('invoices_inbox')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('invoices_inbox')}
                </Link>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider>
              <DropdownItem key={t('invoices_preInvoices')} textValue={t('invoices_preInvoices')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('invoices_preInvoices')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('invoices_transmissionError')} textValue={t('invoices_transmissionError')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('invoices_transmissionError')}
                </Link>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem key={t('invoices_approvalFlow')} textValue={t('invoices_approvalFlow')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('invoices_approvalFlow')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('invoices_foodAndBeverages')} textValue={t('invoices_foodAndBeverages')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('invoices_foodAndBeverages')}
                </Link>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>

      <NavbarItem>
        <Button
          href="/"
          as={NextLink}
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500 text-lg "
          startContent={<CreditCardIcon className="h-5 w-5 " />}
          radius="sm"
          variant="light"
        >
          {t('billing')}
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Dropdown className="min-w-[8em]" showArrow={true} disableAnimation={true}>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500  text-lg "
              startContent={<CogIcon className="h-5 w-5" />}
              radius="sm"
              variant="light"
            >
              {t('tools')}
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection showDivider>
              <DropdownItem key={t('tools_impersonate')} textValue={t('tools_impersonate')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_impersonate')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_vatValidationVies')} textValue={t('tools_vatValidationVies')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_vatValidationVies')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_vatValidationGsis')} textValue={t('tools_vatValidationGsis')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_vatValidationGsis')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_EmailValidationIapr')} textValue={t('tools_EmailValidationIapr')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_EmailValidationIapr')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_IaprConverter')} textValue={t('tools_IaprConverter')}>
                <Link color="foreground" href="/" as={NextLink}>
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
              <DropdownItem key={t('tools_invoiceCustomization')} textValue={t('tools_invoiceCustomization')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_invoiceCustomization')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_userManagement')} textValue={t('tools_userManagement')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_userManagement')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_branchManagement')} textValue={t('tools_branchManagement')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_branchManagement')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_companyManagement')} textValue={t('tools_companyManagement')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_companyManagement')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_packagesExpiration')} textValue={t('tools_packagesExpiration')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_packagesExpiration')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('tools_inactivePackages')} textValue={t('tools_inactivePackages')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('tools_inactivePackages')}
                </Link>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
      <NavbarItem>
        <Dropdown className="min-w-[8em]" showArrow={true} disableAnimation={true}>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-primary-500 text-lg"
              startContent={<QuestionMarkCircleIcon className="h-5 w-5" />}
              radius="sm"
              variant="light"
            >
              {t('help')}
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection showDivider>
              <DropdownItem key={t('help_frequentlyAskedQuestions')} textValue={t('help_frequentlyAskedQuestions')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('help_frequentlyAskedQuestions')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('help_downloadManual')} textValue={t('help_downloadManual')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('help_downloadManual')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('help_iaprDocumentation')} textValue={t('help_iaprDocumentation')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('help_iaprDocumentation')}
                </Link>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem key={t('help_openApiDocumentation')} textValue={t('help_openApiDocumentation')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('help_openApiDocumentation')}
                </Link>
              </DropdownItem>
              <DropdownItem key={t('help_developerWiki')} textValue={t('help_developerWiki')}>
                <Link color="foreground" href="/" as={NextLink}>
                  {t('help_developerWiki')}
                </Link>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </NavbarContent>
  );
}
