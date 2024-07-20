'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import type { z } from 'zod';

import { signInWithCredential, signInWithOAuth } from '@/auth/action';
import { Button } from '@/components/atoms/button';
import Divider from '@/components/atoms/divider';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/atoms/form/form';
import { Input } from '@/components/atoms/input';
import { UserValidation } from '@/validations/UserValidation';

const formSchema = UserValidation.pick({
  password: true,
  email: true,
});

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    signInWithCredential({ body: _values as any });
  }

  return (
    <div className="relative bg-foreground">
      <div className='h-screen bg-[url("/assets/images/img_introduce.png")] bg-cover text-white opacity-45 backdrop-blur-2xl' />
      <div className="absolute bottom-1/2 right-1/2 m-auto flex w-[33%] translate-x-1/2 translate-y-1/2 flex-col items-center rounded-2xl bg-white p-10 text-black shadow-2xl">
        <div className="mb-10 flex flex-col items-center text-2xl font-bold">
          <Link href="/">
            <Image
              alt=""
              src="/assets/images/logo.png"
              width={50}
              height={50}
            />
          </Link>
          <div className="mt-3">
            Sign Up to <span className="text-primary">LFoot</span>
          </div>
          <div className="mt-2 text-center text-sm font-normal" />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="please enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="please enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Sign up
            </Button>
          </form>
        </Form>
        <div className="mt-6 flex w-full items-center">
          <Divider />
          <span className="w-3/4 text-center text-[13px]">Or sign up with</span>
          <Divider />
        </div>
        <div className="mt-6 flex w-full gap-3">
          <form
            className="w-full"
            action={() => {
              signInWithOAuth({ provider: 'google' });
            }}
          >
            <Button className="w-full space-x-2" variant="outline">
              <FaGoogle size={20} />
              <span>Google</span>
            </Button>
          </form>
          <form
            className="w-full"
            action={() => {
              signInWithOAuth({ provider: 'facebook' });
            }}
          >
            <Button className="w-full space-x-2" variant="outline">
              <FaFacebookF size={20} />
              Facebook
            </Button>
          </form>
        </div>
        <div className="mt-6 space-x-1 text-center text-sm">
          <span>Do you have an account?</span>
          <Link className="font-medium text-primary" href="/sign-up">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
