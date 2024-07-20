import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../button';

interface IProps {
  align?: 'center' | 'left' | 'right';
  title: string;
  description?: string;
  action?: {
    title: string;
    href: string;
  };
}

export default function SectionHeader({
  align = 'center',
  title,
  description,
  action,
}: IProps) {
  return (
    <div
      className={cn('mb-16 flex flex-col items-center', {
        'items-start': align === 'left',
        'items-end': align === 'right',
        'text-center': align === 'center',
      })}
    >
      <div className="mb-3 text-4xl font-bold">{title}</div>
      <div
        className={cn('w-[70%] text-center text-lg opacity-80', {
          'text-left': align === 'left',
          'text-right': align === 'right',
          'text-center': align === 'center',
        })}
      >
        {description}
      </div>
      {action && (
        <Link href={action.href}>
          <Button size="lg" className="mt-5 space-x-2 px-5">
            <span>{action.title}</span> <ChevronRight />
          </Button>
        </Link>
      )}
    </div>
  );
}
