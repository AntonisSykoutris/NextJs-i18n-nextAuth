'use client';
import { Card, Skeleton, Button } from '@nextui-org/react';
import { DocumentDuplicateIcon } from '@heroicons/react/outline';

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
            <div className="flex justify-between items-center align-middle">
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200 "></div>
              </Skeleton>
              <Skeleton className="h-5 w-5 rounded-lg">
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
              </Skeleton>
            </div>
          </Card>
        ))}
    </div>
  );
}
