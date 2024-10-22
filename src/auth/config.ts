import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export default {
  providers: [Google],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
    session: async ({ session }) => {
      return session;
    },
    // signIn: ({ account, profile }) => {
    //   console.log(account, profile);
    //   return true;
    // },
  },
} satisfies NextAuthConfig;
