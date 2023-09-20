'use client';
import { Card, Button } from '@nextui-org/react';
import { DocumentDuplicateIcon } from '@heroicons/react/outline';

export default function CompanyCard({ index }: { index: number }) {
  return (
    <Card className="flex justify-between w-[16em] space-y-5 p-4 " radius="md">
      <div className="">ΣΤΑΘΩΡΗΣ ΚΑΙ ΣΙΑ ΕΠΕ {index * 5000000}</div>
      <div className="flex justify-between items-center align-middle">
        <div className="w-4/5 font-bold text-2xl">1234567890</div>
        <Button
          isIconOnly={true}
          disableRipple
          color="primary"
          aria-label="copy Vat"
          variant="light"
          spinner
          size="sm"
          className="bg-transparent h-5 w-5"
        >
          <DocumentDuplicateIcon className=" w-full h-full rounded-lg" />
        </Button>
      </div>
    </Card>
  );
}
