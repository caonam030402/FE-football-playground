import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const Env = createEnv({
  server: {
    LOGTAIL_SOURCE_TOKEN: z.string().optional(),
    API_URL: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_AUTH_GOOGLE_ID: z.string().optional(),
    NEXT_PUBLIC_AUTH_GOOGLE_SECRET: z.string().optional(),
    NEXT_PUBLIC_AUTH_SECRET: z.string().optional(),
    NEXT_PUBLIC_NEXTAUTH_URL: z.string().optional(),
  },
  runtimeEnv: {
    API_URL: process.env.API_URL,
    LOGTAIL_SOURCE_TOKEN: process.env.LOGTAIL_SOURCE_TOKEN,
    NEXT_PUBLIC_AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    NEXT_PUBLIC_AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    NEXT_PUBLIC_AUTH_SECRET: process.env.AUTH_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
});
