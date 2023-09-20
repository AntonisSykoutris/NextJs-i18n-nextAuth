'use client';
import { Card, Snippet } from '@nextui-org/react';

export default function CompanyCard({ index }: { index: number }) {
  return (
    <Card className="flex justify-between w-[16em] space-y-5 p-4 " radius="md">
      <div className="">ΣΤΑΘΩΡΗΣ ΚΑΙ ΣΙΑ ΕΠΕ {index * 5000000}</div>
      <Snippet
        size="sm"
        symbol=""
        tooltipProps={{
          color: 'foreground',
          content: 'Copy this snippet',
          placement: 'top',
          closeDelay: 0,
        }}
        variant="bordered"
        color="default"
        classNames={{
          pre: 'text-sm font-medium',
          copyButton: 'hover:text-primary-500',
        }}
      >
        1234567890
      </Snippet>
    </Card>
  );
}
