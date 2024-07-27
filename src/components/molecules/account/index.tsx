import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';

import { signOut } from '@/auth/action';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar';
import { Button } from '@/components/atoms/button';
import Divider from '@/components/atoms/divider';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/atoms/hover-card';

export default function Account() {
  const session = useSession();

  const tabOptions = [
    { label: 'Profile', href: '/profile', icon: <User size={20} /> },
    { label: 'Settings', href: '/settings', icon: <Settings size={20} /> },
  ];

  const user = session.data?.user;

  return (
    <div>
      {user ? (
        <HoverCard openDelay={0}>
          <HoverCardTrigger>
            <Avatar className="size-10">
              <AvatarImage
                src={user.image || 'https://github.com/shadcn.png'}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent align="end" sideOffset={10} className="p-5">
            <div>
              <Avatar className="mx-auto mb-2 size-20">
                <AvatarImage
                  src={user.image || 'https://github.com/shadcn.png'}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-center font-semibold">{user.name}</div>
              <Divider />
              <div className="flex flex-col space-y-3">
                {tabOptions.map((tab) => (
                  <div className="flex items-center gap-3" key={tab.href}>
                    <div>{tab.icon}</div>
                    <Link href={tab.href}>{tab.label}</Link>
                  </div>
                ))}
              </div>
              <Divider />
              <div className="flex items-center gap-3">
                <Button className="w-full space-x-2" onClick={() => signOut()}>
                  <LogOut size={18} />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <div className="space-x-3">
          <Link href="/sign-up">
            <Button size="sm" className="bg-primary px-6 text-white">
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              size="sm"
              className="bg-white px-6 text-primary hover:bg-white"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
