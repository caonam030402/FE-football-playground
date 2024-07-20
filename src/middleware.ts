import type { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import createMiddleware from 'next-intl/middleware';

import authConfig from './auth/config';
import { AppConfig } from './utils/AppConfig';

const publicPages = ['/login'];

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const { auth } = NextAuth(authConfig);

const authHandler = auth((req) => intlMiddleware(req));

export default auth(async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${AppConfig.locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i',
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  }

  return (authHandler as any)(req);
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
