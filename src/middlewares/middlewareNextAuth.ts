import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
export { default } from 'next-auth/middleware';

export function middlewareNextAuth(middleware: NextMiddleware): NextMiddleware {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // console.log('second one');
    return middleware(request, event);
  };
}
