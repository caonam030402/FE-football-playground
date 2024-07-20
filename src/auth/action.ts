'use server';

import { signIn } from './auth';

export async function signInWithOAuth({
  provider,
}: {
  provider: 'google' | 'facebook';
}) {
  await signIn(provider, { redirectTo: '/' });
}
