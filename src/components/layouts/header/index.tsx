'use client';

import { Bell, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import Divider from '@/components/atoms/divider';
import Account from '@/components/molecules/account';
import { cn } from '@/lib/utils';

const menuTab = [
  { label: 'Home', href: '' },
  { label: 'Pitch', href: '/about' },
  { label: 'Team', href: '/contact' },
];

export default function Header() {
  const path = usePathname();

  const isActiveLink = (pathName: string) => {
    return path.includes(pathName);
  };

  return (
    <div className="">
      <div className="container relative flex items-center justify-between py-4 text-white">
        <div className="flex items-center gap-3">
          <Image alt="" src="/assets/images/logo.png" width={50} height={50} />
          <h1 className="text-xl font-bold">LFoot</h1>
        </div>
        <div className="absolute right-1/2 flex translate-x-1/2 gap-10">
          {menuTab.map((tab) => (
            <Link
              className={cn('opacity-60', {
                'opacity-100 font-medium': isActiveLink(tab.href),
              })}
              href={tab.href}
              key={tab.href}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Search size={20} />
          <div className="relative">
            <div className="absolute right-0 top-[-12%] size-3 rounded-full border-2 border-background bg-red-500" />
            <Bell size={20} />
          </div>
          <Divider vertical className="mx-0 h-6" />
          <Account />
        </div>
      </div>
    </div>
  );
}
