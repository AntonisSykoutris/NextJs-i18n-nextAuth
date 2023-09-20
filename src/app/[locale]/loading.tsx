'use client';
import { Card, Skeleton, Snippet } from '@nextui-org/react';

export default function loading() {
  return (
    <div className="container mx-auto place-items-center place-content-stretch items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  auto-rows-fr">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <Card className="flex justify-between w-[16em] space-y-5 p-4" radius="md" key={i}>
            <Skeleton className="rounded-lg">
              <div className=" h-14 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
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
            </Skeleton>
          </Card>
        ))}
    </div>
  );
}
