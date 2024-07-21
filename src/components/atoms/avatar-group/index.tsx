import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

interface IProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function AvatarGroup({ size }: IProps) {
  return (
    <div>
      <div className="flex -space-x-2 rtl:space-x-reverse">
        <Image
          width={100}
          height={100}
          className={cn('size-10', 'rounded-full border-2 border-white', {
            'size-7': size === 'sm',
            'size-8': size === 'md',
            'size-10': size === 'lg',
          })}
          src="https://github.com/shadcn.png"
          alt=""
        />
        <Image
          width={100}
          height={100}
          className={cn('size-10', 'rounded-full border-2 border-white', {
            'size-7': size === 'sm',
            'size-8': size === 'md',
            'size-10': size === 'lg',
          })}
          src="https://github.com/shadcn.png"
          alt=""
        />
        <Image
          width={100}
          height={100}
          className={cn('size-10', 'rounded-full border-2 border-white', {
            'size-7': size === 'sm',
            'size-8': size === 'md',
            'size-10': size === 'lg',
          })}
          src="https://github.com/shadcn.png"
          alt=""
        />
        <Link
          className={cn(
            'flex size-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800',
            {
              'size-7 text-[10px]': size === 'sm',
              'size-8': size === 'md',
              'size-10': size === 'lg',
            },
          )}
          href="123"
        >
          +99
        </Link>
      </div>
    </div>
  );
}
