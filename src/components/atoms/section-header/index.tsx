import React from 'react';

import { cn } from '@/lib/utils';

interface IProps {
  align?: 'center' | 'left' | 'right';
  title: string;
  description?: string;
}

export default function SectionHeader({
  align = 'center',
  title,
  description,
}: IProps) {
  return (
    <div
      className={cn('mb-10 flex flex-col items-center', {
        'items-start': align === 'left',
        'items-end': align === 'right',
        'text-center': align === 'center',
      })}
    >
      <div className="mb-3 text-3xl font-bold">{title}</div>
      <div
        className={cn('w-2/5 text-center text-lg', {
          'text-left': align === 'left',
          'text-right': align === 'right',
          'text-center': align === 'center',
        })}
      >
        {description}
      </div>
    </div>
  );
}
