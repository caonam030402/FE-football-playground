import React from 'react';

import { cn } from '@/lib/utils';

interface IProps {
  vertical?: boolean;
  className?: string;
}

export default function Divider({ vertical = false, className }: IProps) {
  return vertical ? (
    <div className={cn('mx-4 h-full w-[0.2px] bg-gray-300/[0.2]', className)} />
  ) : (
    <div className={cn('my-4 h-[0.2px] w-full bg-gray-300/[0.2]', className)} />
  );
}
