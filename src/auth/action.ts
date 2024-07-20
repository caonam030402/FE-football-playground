'use server';

import { PATH } from '@/constants/Common';

import { signIn, signOut as _signOut } from './auth';

export async function signInWithOAuth({
  provider,
}: {
  provider: 'google' | 'facebook';
}) {
  await signIn(provider, { redirectTo: '/' });
}

export async function signInWithCredential({ body }: { body: FormData }) {
  await signIn('credentials', body, { redirectTo: '/' });
}

export async function signOut() {
  await _signOut({ redirectTo: PATH.SIGN_IN });
}
