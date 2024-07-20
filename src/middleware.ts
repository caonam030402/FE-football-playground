import type { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import createMiddleware from 'next-intl/middleware';

import authConfig from './auth/config';
import { PATH, PUBLIC_PAGES } from './constants/Common';
import { AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const { auth } = NextAuth(authConfig);

const authHandler = auth((req) => {
  const publicPathnameRegex = RegExp(
    `^(/(${AppConfig.locales.join('|')}))?(${PUBLIC_PAGES.flatMap((p) =>
      p === '/' ? ['', '/'] : p,
    ).join('|')})/?$`,
    'i',
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const isProtected = !isPublicPage && !req.auth;
  const isRejected =
    req.auth &&
    (req.nextUrl.pathname === PATH.SIGN_IN ||
      req.nextUrl.pathname === PATH.SIGN_UP);

  if (isProtected) {
    const newUrl = new URL(PATH.SIGN_IN, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (isRejected) {
    const newUrl = new URL(PATH.HOME, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  return intlMiddleware(req);
});

export default auth(async function middleware(req: NextRequest) {
  return (authHandler as any)(req);
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
